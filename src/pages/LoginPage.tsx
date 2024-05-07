import GoogleSignIn from "../components/auth/GoogleSignIn";

export default function LoginPage() {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleSignIn />
    </div>
  )
}