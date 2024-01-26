import { useForm } from 'react-hook-form'
import { ContentWrapper } from '../../Components/ContentWrapper/ContentWrapper'

export const Contact = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()

  const submitForm = async data => {
	console.log(data);
  }

  return (
	<ContentWrapper title="Kontakt os">
		<form onSubmit={handleSubmit(submitForm)}>
			<div>
				<label htmlFor='name'>Navn:</label>
				<input id="name" type="text" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} />
				{errors.name && errors.name.type === 'required' && <span>Du skal udfylde feltet!</span>}
				{errors.name && errors.name.type === 'pattern' && <span>Der må kun være bogstaver i et navn!</span>}
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<input id="email" type="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
				{errors.email && errors.email.type === 'required' && <span>Du skal udfylde feltet!</span>}
				{errors.email && errors.email.type === 'pattern' && <span>Du skal indtaste en gyldig email!</span>}
			</div>
			<div>
				<button type="submit">Send</button>
			</div>
		</form>
	</ContentWrapper>
  )
}
