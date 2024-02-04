import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { PosterDetailsStyle } from "./PosterDetails.style"
import { useForm } from "react-hook-form"
import { useAuth } from '../Auth/AuthProvider'


export const PosterDetails = () => {
  const [ apiData, setApiData ] = useState([])
  const { poster } = useParams()
  const { register, handleSubmit, formState: { errors }} = useForm()
  const { loginData } = useAuth()

  const add2Cart = async data => {
    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`
      }
    }

    const endpoint = `http://localhost:3000/cart`
    const result = await axios.post(endpoint,data,options)
  }

  const getApiData = async () => {
    const result = await axios.get(`http://localhost:3000/posters/${poster}`)
    setApiData(result.data)
  }

  useEffect(() => {
    getApiData()
  }, [poster, setApiData])

  if(!apiData.id) {
    return <div>Loading...</div>
  }

  return (
    <PosterDetailsStyle>
      <div>
        <figure>
          <img src={apiData.image} alt={apiData.name} />
        </figure>
      </div>
      <div>
        <h2>{apiData.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: apiData.description }}></p>
        <p>
          Mål: {apiData.width} x {apiData.height} cm
        </p>
        <p>Varenummer: {apiData.id}</p>
        <p>Pris: {apiData.price},00 DKK</p>
        <p>Antal på lager: {apiData.stock} DKK</p>

        <form onSubmit={handleSubmit(add2Cart)}>
          <input type="hidden" defaultValue={apiData.id} {...register('poster_id')} />
          <input type="number" {...register('quantity', { required: true })} />
          <button>Læg i kurv</button>
        </form>
      </div>
    </PosterDetailsStyle>
  )
}
