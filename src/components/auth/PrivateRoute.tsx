import { useContext } from "react"
import { CurrentUserContext } from "./CurrentUserContext"
import { Navigate } from "react-router-dom"

type Props = {
  children: React.ReactNode,
}

export default function PrivateRoute( { children }: Props ) {

  const authUser = useContext(CurrentUserContext)

  if (!authUser) {
    return <Navigate to='/login' />
  } else {
    return children
  }
}