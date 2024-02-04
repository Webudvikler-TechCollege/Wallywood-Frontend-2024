import { useAuth } from "./AuthProvider"
import { LoginInfoStyle } from "./LoginInfo.style"
import { AiOutlineLogout } from "react-icons/ai"

export const LoginInfo = () => {
  const { loginData, setLoginData } = useAuth()

  return (
    <LoginInfoStyle>
      <div>
        {loginData ? (
          <>
            <span>Bruger: {loginData.user.firstname} {loginData.user.lastname}</span>
            <button onClick={() => setLoginData("")} title="Log ud">
              <AiOutlineLogout />
            </button>
          </>
        ) : (
          <>Du er ikke logget ind</>
        )}
      </div>
    </LoginInfoStyle>
  )
}
