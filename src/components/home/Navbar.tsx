import { useContext } from "react"
import { CurrentUserContext } from "../auth/CurrentUserContext"
import GoogleSignOut from "../auth/GoogleSignOut"
import { User as FirebaseUser } from "firebase/auth"

export default function Navbar() {
  const authUser: FirebaseUser | null = useContext(CurrentUserContext) as FirebaseUser | null;
  
  return (
    <div className="flex justify-end mt-3 mr-3">
      <div className="flex flex-row justify-end items-center gap-x-2">
        {/* <p>{`Hi, ${authUser.displayName}!`}</p> */}
        <p className="text-[24px] font-medium">{authUser ? `Hi, ${authUser.displayName}!` : ''}</p>
        <GoogleSignOut/>
      </div>
    </div>
  )
}