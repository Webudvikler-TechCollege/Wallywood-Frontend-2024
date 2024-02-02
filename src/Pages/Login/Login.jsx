import { useForm } from "react-hook-form"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useAuth } from "../../Components/Providers/AuthProvider"
import axios from "axios"


const Login = () => {
  const { loginData, setLoginData } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = async data => {
    const endpoint = `http://localhost:3000/login`
    try {
      const result = await axios.post(endpoint, data)
      sessionStorage.setItem('access_token', JSON.stringify(result.data))
      setLoginData(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  const LogOut = () => {
    sessionStorage.removeItem('access_token')
    setLoginData('')
  }

  return (
      <ContentWrapper title="Login">
        {!loginData ? (
        <form method="POST" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="username">Brugernavn:</label>
          <input type="text" id="username" {...register('username',{ required: true })} />
          {errors.username && <span>Brugernavn skal udfyldes</span>}
        </div>
        <div>
          <label htmlFor="password">Adgangskode:</label>
          <input type="password" id="password" {...register('password', {required: true})} />
          {errors.password && <span>Password skal udfyldes</span>}
        </div>
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
      ) : (
        <div>
          <h2>Du er logget ind som {`${loginData.user.firstname} ${loginData.user.lastname}`}</h2>
          <button onClick={() => LogOut()}>Log ud</button>
        </div>
      )}
    </ContentWrapper>
  )
}

export default Login
