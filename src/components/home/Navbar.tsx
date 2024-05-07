import { useContext } from "react"
import { CurrentUserContext } from "../auth/CurrentUserContext"
import GoogleSignOut from "../auth/GoogleSignOut"

export default function Navbar() {
  const authUser = useContext(CurrentUserContext)

  return (
    <div className="flex justify-end mt-3 mr-3">
      <div className="flex flex-row justify-end items-center gap-x-2 text-[18px]">
        <p>{`Hi, ${authUser.displayName}!`}</p>
        <GoogleSignOut/>
      </div>
    </div>
  )
}