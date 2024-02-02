import { useForm } from 'react-hook-form'
import { ContentWrapper } from '../../Components/ContentWrapper/ContentWrapper'

export const Contact = () => {
	const { register, handleSubmit, formState: {errors}} = useForm()

	const submitForm = data => {
		console.log(data)
	}

  return (
	<ContentWrapper title="Kontakt os">
		<form onSubmit={handleSubmit(submitForm)}>
			<div>
				<label htmlFor="name">Navn:</label>
				<input id="name" {...register('name', { required: true, pattern: /^[A-Za-z]+$/i})} />
				{errors.name && errors.name.type === 'required' && <span className="error">Du skal udfylde feltet</span>}
				{errors.name && errors.name.type === 'pattern' && <span  className="error">Et navn må ikke indeholde tal</span>}
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input id="email" type="email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
				{errors.email && errors.email.type === 'required' && <span className="error">Du skal udfylde feltet</span>}
				{errors.email && errors.email.type === 'pattern' && <span className="error">Du skal indtaste en gyldig email</span>}
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	</ContentWrapper>
  )
}
