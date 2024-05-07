import { getAuth, signOut } from "firebase/auth";

export default function GoogleSignOut() {

  const auth = getAuth();
  const userSignOut = () => {

    signOut(auth)
    // .then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
  }

  return (
    <button onClick={userSignOut} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
      Sign Out
    </button>
  )
}