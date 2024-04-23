import { redirect } from "next/navigation";

export default function AuthPage() {
    redirect ('/auth/login')
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}