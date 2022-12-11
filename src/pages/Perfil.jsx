import { useAuth } from "../context/auth-store"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Perfil() {
  const { isSignedIn, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/login")
  }

  useEffect(() => {
    const signedIn = isSignedIn()

    if(!signedIn) {
      navigate("/login")
    }
  }, [isSignedIn, navigate])
  
  return (
    <div>
      <h1>hello world</h1>
      {user?.name}
      {user?.email}
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}