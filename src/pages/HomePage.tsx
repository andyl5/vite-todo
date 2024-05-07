import Navbar from "../components/home/Navbar"
import TodoList from "../components/home/TodoList"
import { useEffect, useContext } from 'react'
import supabase from '../utils/supabase'
import { CurrentUserContext } from "../components/auth/CurrentUserContext"

export default function HomePage() {
  const authUser = useContext(CurrentUserContext)

  useEffect(() => {
    handleUserLogin();
  }, []);

  async function handleUserLogin() {
    const { data } = await supabase.from("users").select().eq('google_uid', authUser.uid)
    if (data.length === 0) {
      const { data } = await supabase.from('users').insert({"google_uid": authUser.uid, "email": authUser.email, "display_name": authUser.displayName}).select()
    }
  }

  return (
    <div>
      <Navbar/>
      <TodoList/>
    </div>
  )
}