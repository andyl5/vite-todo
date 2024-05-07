import Navbar from "../components/home/Navbar"
import TodoList from "../components/home/TodoList"
import { useEffect, useContext } from 'react'
import supabase from '../utils/supabase'
import { CurrentUserContext } from "../components/auth/CurrentUserContext"
import { User as FirebaseUser } from "firebase/auth"

export default function HomePage() {
  const authUser: FirebaseUser | null = useContext(CurrentUserContext) as FirebaseUser | null;

  useEffect(() => {
    handleUserLogin();
  }, []);

  async function handleUserLogin() {
    if (authUser) {
      const { data } = await supabase.from("users").select().eq('google_uid', authUser.uid)
      if (data && data.length === 0) {
        // const { error } = await supabase.from('users').insert({"google_uid": authUser.uid, "email": authUser.email, "display_name": authUser.displayName})
        await supabase.from('users').insert({"google_uid": authUser.uid, "email": authUser.email, "display_name": authUser.displayName})
      }
    }
  }

  return (
    <div>
      <Navbar/>
      <TodoList/>
    </div>
  )
}