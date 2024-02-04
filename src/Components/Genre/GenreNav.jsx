import { NavLink, useNavigate } from "react-router-dom"
import { useGenre } from "./GenreProvider"
import { GenreNavStyle } from "./GenreNav.style"
import { useState } from "react"

export const GenreNav = () => {
  const navigate = useNavigate()
  const { genreData } = useGenre()
  const [ selectedOption, setSelectedOption ] = useState("")

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
    const url = `/posters/${e.target.value}`
    navigate(url)
  }

  return (
    <GenreNavStyle>
      <ul>
        {genreData &&
          genreData.map((genre) => {
            return (
              <li key={genre.id}>
                <NavLink to={genre.slug}>{genre.title}</NavLink>
              </li>
            )
          })}
      </ul>
      <select value={selectedOption} onChange={handleSelectChange}>
        {genreData &&
          genreData.map((genre) => {
            return (
              <option key={genre.id} value={genre.slug}>
                {genre.title}
              </option>
            )
          })}
      </select>
    </GenreNavStyle>
  )
}
