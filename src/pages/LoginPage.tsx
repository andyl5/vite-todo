import GoogleSignIn from "../components/auth/GoogleSignIn";

export default function LoginPage() {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-[32px] block">Welcome to Taskify!</p>
      <GoogleSignIn />
    </div>
  )
}