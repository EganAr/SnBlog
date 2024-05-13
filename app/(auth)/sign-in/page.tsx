import Loginform from "@/app/components/LoginForm";
import { auth } from "@/lib/firebase/services";

export default function Login() {
  return (
    <div>
      <Loginform />
    </div>
  );
}
