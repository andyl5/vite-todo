import { onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../../firebase"

export const CurrentUserContext = createContext(null)

export const CurrentUserProvider = ( { children } ) => {
  
  const [authUser, setAuthUser] = useState(null)  
  
  // needs to check if the app is finished loading, before rendering the router.
  // (without loading) i think the context renders immediately and before we check if the authUser exists, which is why...
  // ...it cannot remember that the user is already logged in
  // loading allows it to check if the authUser is/not exists --> THEN renders the context
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setAuthUser(user)
      else {setAuthUser(null)}
      setLoading(false)
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [])

return (
  <CurrentUserContext.Provider value={authUser}>
      {!loading &&
      children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(CurrentUserContext)