/**
 * Poster Provider til browser lagring af plakat data
 */
import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

// Deklarerer context komponent
const PosterContext = createContext()

// Deklarerer provider - children dækker over child components
const PosterProvider = ({children}) => {
	// Deklarerer state hook
	const [ posterData, setPosterData ] = useState([])

	// Kalder useEffect hook
	useEffect(() => {
		// Henter data i sessionsstorage hvis de findes
		if(sessionStorage.getItem('posterlist')) {
			setPosterData(JSON.parse(sessionStorage.getItem('posterlist')))
		} else {
			// Kalder API og smider data i sessionstorage
			const getData = async () => {
				const result = await axios.get('http://localhost:3000/posters')
				sessionStorage.setItem('posterdata', JSON.stringify(result.data));
				setPosterData(result.data)
			}
			getData()
		}
	}, [children]);
	
	// Returnerer komponent med data hook som værdi
	return (
		<PosterContext.Provider value={{posterData, setPosterData}}>
			{children}
		</PosterContext.Provider>
	);
}

// Deklarerer custom hook
const usePosterData = () => useContext(PosterContext)

export { PosterProvider, usePosterData };
