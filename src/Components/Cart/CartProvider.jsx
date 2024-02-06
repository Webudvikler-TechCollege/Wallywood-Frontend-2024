import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../Auth/AuthProvider"
import axios from "axios"

const cartContext = createContext()

export const CartProvider = ({children}) => {
	const [ cartItems, setCartItems ] = useState([])
	const { loginData } = useAuth()

	const getData = async () => {
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`
			}
		}

		const endpoint = `http://localhost:3000/cart`
		try {
			if(loginData && loginData.access_token) {
				const result = await axios.get(endpoint, options)
				setCartItems(result.data)	
			}
		} catch (error) {
			console.error(`Fejl i kald af indkøbskurv liste: ${error}`)	
		}
	}

	useEffect(() => {
		getData()
	},[children, loginData])


  return (
	<cartContext.Provider value={{ cartItems, setCartItems }}>
		{children}
	</cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext)
