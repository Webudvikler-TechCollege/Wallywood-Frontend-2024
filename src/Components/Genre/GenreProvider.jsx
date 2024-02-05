import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const GenreContext = createContext()

export const GenreProvider = ({children}) => {
	const [genreData, setGenreData] = useState([])

	const getData = async () => {
		const url = `http://localhost:3000/genre?sort_key=title`
		const result = await axios.get(url)
		sessionStorage.setItem("genres", JSON.stringify(result.data))
		setGenreData(result.data)
	}

	useEffect(() => {
		if(sessionStorage.getItem("genres")) {
			setGenreData(JSON.parse(sessionStorage.getItem("genres")))
		} else {
			getData()
		}
	},[children])

  return (
	<GenreContext.Provider value={{genreData, setGenreData}}>
		{children}
	</GenreContext.Provider>
  )
}

export const useGenre = () => useContext(GenreContext)