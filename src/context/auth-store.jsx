import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { hash, compare } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"

const AuthStore = createContext({})

export const useAuth = () => {
  return useContext(AuthStore)
}

const users = new Map()

users.set("vitor@gmail.com", {
  name: "vitor",
  email: "vitor@gmail.com",
  password: "$2a$10$lLObXqsA7rCfGVmQJcO/H.aTjNm0EtNHqDUsRTkdYQY9Npe6CEilq"
})

export const AuthStoreProvider = ({ children, private_key, storage_key = "@highshoes" }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)
  
  const generateAccessToken = useCallback(({ email }) => {
    const payload = {
      email
    }

    const access_token = sign({ payload }, private_key.access, {
      expiresIn: "5min"
    })

    return access_token
  }, [private_key])

  const generateRefreshToken = useCallback(({ email }) => {
    const payload = {
      email
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
    const user = await users.get(email)

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

  const register = async ({ name, email, password }) => {
    const user = users.has(email)

    if(user) {
      return {
        message: "Usuário com esse e-mail já existe."
      }
    }

    try {
      const hashedPassword = await hash(password, 10)

      const newUser = {
        name,
        email,
        password: hashedPassword
      }

      users.set(email, newUser)

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
  
  const isSignedIn = useCallback(() => {
    const access_token = localStorage.getItem(`${storage_key}:access-token`)

    if(!access_token) {
      // live life as normal
      return false
    }

    // token exists
    try {
      // validate ACCESS token
      const verifiedToken = verify(access_token, private_key.access)
      const user = users.get(verifiedToken.payload.email)

      handleSetSignedIn(user)
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

  useEffect(() => {
    isSignedIn()
  }, [handleSetSignedIn, isSignedIn, private_key, storage_key])

  return (
    <AuthStore.Provider value={{
      isSignedIn,
      signedIn,
      login,
      register,
      user: loggedUser,
      requireSignIn
    }}>
      {children}
    </AuthStore.Provider>
  )
}