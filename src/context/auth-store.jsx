import { createContext, useContext, useState } from "react"
import { hash, compare } from "bcryptjs"

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

export const AuthStoreProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)

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

    setSignedIn(true)
    setLoggedUser(user)

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

    setSignedIn(true)
    setLoggedUser({
      name,
      email,
      password
    })

    try {
      users.set(email, {
        name,
        email,
        password: await hash(password, 10)
      })
    } catch (error) {
      return {
        message: "Algo deu errado :/"
      }  
    }
    console.log(users)
    return {
      ok: true
    }
  }

  const requireSignIn = () => {
    return "/login?to=checkout"
  }

  return (
    <AuthStore.Provider value={{
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