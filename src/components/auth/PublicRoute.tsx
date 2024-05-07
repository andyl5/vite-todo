import { useContext } from "react"
import { CurrentUserContext } from "./CurrentUserContext"
import { Navigate } from "react-router-dom"

type Props = {
  children: React.ReactNode,
}

export default function PublicRoute( { children }: Props ) {

  const authUser = useContext(CurrentUserContext)

  if (authUser) {
    return <Navigate to='/home' />
  } else {
    return children
  }
}