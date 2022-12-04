import { useAuth } from "../context/auth-store"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Perfil() {
  const { signedIn, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!signedIn) {
      navigate("/login")
    }
  }, [navigate, signedIn])
  
  return (
    <div>
      <h1>hello world</h1>
      {user?.name}
      {user?.email}
    </div>
  )
}