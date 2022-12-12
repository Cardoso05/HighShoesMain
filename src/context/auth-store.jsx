import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { hash, hashSync, compare } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"

const AuthStore = createContext({})

export const useAuth = () => {
  return useContext(AuthStore)
}

const users = new Map()

users.set("312324wedddfwerere", {
  name: "matheus",
  id: "312324wedddfwerere",
  email: "matheus@gmail.com",
  password: "$2a$10$lLObXqsA7rCfGVmQJcO/H.aTjNm0EtNHqDUsRTkdYQY9Npe6CEilq",
  details: {
    cep: "04557001",
    street: "Rua Texas",
    bairro: "Brooklin Paulista"
  }
})

console.log(hashSync("123"));

export const AuthStoreProvider = ({ children, private_key, storage_key = "@highshoes" }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)

  const findUserByEmail = async (email) => {
    const usersArray = [...users]
      .map(([_, value]) => value);
    
    return usersArray.find(user => user.email === email)
  }

  async function createID() {
    try {
      const ID = sign({ createdAt: new Date().getTime() }, private_key.access)
      return [ID, null]
    } catch (error) {
      return [null, error]
    }
  }
  
  const generateAccessToken = useCallback(({ id }) => {
    const payload = {
      id
    }

    const access_token = sign({ payload }, private_key.access, {
      expiresIn: "5min"
    })

    return access_token
  }, [private_key])

  const generateRefreshToken = useCallback(({ id }) => {
    const payload = {
      id
    }

    const token = sign({ payload }, private_key.refresh, {
      expiresIn: "7d"
    })

    return token
  }, [private_key])

  const handleSetSignedIn = useCallback(async (user) => {
    setLoggedUser(user)
    setSignedIn(true)

    const access_token = generateAccessToken(user)
    const refresh_token = generateRefreshToken(user)
    
    localStorage.setItem(`${storage_key}:access-token`, access_token)
    localStorage.setItem(`${storage_key}:refresh-token`, refresh_token)
  }, [generateAccessToken, generateRefreshToken, storage_key])

  const login = async ({ email, password }) => {
    const user = await findUserByEmail(email)

    if(!user) {
      return {
        message: "Login incorreto!"
      }
    }

    const comparePasswords = async () => {
      try {
        await compare(password, user.password)
        return true
      } catch(error) {
        return false
      }
    }

    if(!comparePasswords()) {
      return {
        message: "Login incorreto!"
      }
    }

    await handleSetSignedIn(user)

    return {
      ok: true
    }
  }

  const register = async ({ name, email, password, details }) => {
    const user = users.has(email)

    if(user) {
      return {
        message: "Usuário com esse e-mail já existe."
      }
    }

    try {
      const hashedPassword = await hash(password, 10)
      const id = await createID()

      const newUser = {
        id,
        name,
        email,
        password: hashedPassword,
        details
      }

      users.set(id, newUser)

      await handleSetSignedIn(newUser)
    } catch (error) {
      return {
        message: "Algo deu errado :/"
      }  
    }

    return {
      ok: true
    }
  }

  const requireSignIn = () => {
    return "/login?to=checkout"
  }
  
  const isSignedIn = useCallback(async () => {
    const access_token = localStorage.getItem(`${storage_key}:access-token`)

    if(!access_token) {
      // live life as normal
      return false
    }

    // token exists
    try {
      // validate ACCESS token
      const verifiedToken = verify(access_token, private_key.access)
      const user = users.get(verifiedToken.payload.id)

      await handleSetSignedIn(user)
      return true
    } catch (error) {
      // validate error thrown
      console.error(error)

      if(error.name === "TokenExpiredError") {
        // create new token out of refresh token
        const refresh_token = localStorage.getItem(`${storage_key}:refresh-token`)

        try {
          const verifiedToken = verify(refresh_token, private_key.refresh)
  
          const new_access_token = generateAccessToken(verifiedToken.payload)
          localStorage.setItem(`${storage_key}:access-token`, new_access_token)
          console.log("refresh!")
          return true
        } catch (error) {
          console.log("no going back now!")
          console.error(error)
          return false
        }
      }

      return false
    }
  }, [generateAccessToken, handleSetSignedIn, private_key, storage_key])

  const logout = () => {
    localStorage.removeItem(`${storage_key}:access-token`)
    localStorage.removeItem(`${storage_key}:refresh-token`)
    setSignedIn(null)
    setLoggedUser(null)
  }

  const editUser = async (id, data) => {
    const user = users.get(id)

    if(!user) {
      return {
        message: "Não achei esse usuário"
      }
    }

    const newUser = { ...user, ...data }
    users.set(id, newUser)
    await handleSetSignedIn(newUser)
  }

  useEffect(() => {
    isSignedIn()
  }, [handleSetSignedIn, isSignedIn, private_key, storage_key])

  return (
    <AuthStore.Provider value={{
      isSignedIn,
      signedIn,
      logout,
      login,
      register,
      user: loggedUser,
      requireSignIn,
      editUser
    }}>
      {children}
    </AuthStore.Provider>
  )
}