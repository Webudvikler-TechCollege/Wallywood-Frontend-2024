import { useForm } from "react-hook-form"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import axios from "axios"

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async data => {
	console.log(data);
	const endpoint = `http://localhost:3000/users`
	const result = await axios.post(endpoint, data)
	console.log(result)
  }

  return (
	<ContentWrapper title="Sign Up">
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="hidden" defaultValue="1" {...register('org_id')} />
			<input type="hidden" defaultValue="1234" {...register('refresh_token')} />
			<input type="hidden" defaultValue="1" {...register('groups')} />
			<div>
				<label htmlFor="text">Firstname</label>
				<input type="text" {...register('firstname', { required: true })} />
			</div>
			<div>
				<label htmlFor="text">Lastname</label>
				<input type="text" {...register('lastname', { required: true })} />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" {...register('email', { required: true })} />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" {...register('password', { required: true })} />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	</ContentWrapper>
  )
}
