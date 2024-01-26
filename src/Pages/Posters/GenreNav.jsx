import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { GenreNavStyle } from "./GenreNav.style";
import { useGenreData } from "../../Components/Providers/GenreProvider";

export const GenreNav = () => {
  const { genreData } = useGenreData()

  return (
    <GenreNavStyle>
      <ul>
      {genreData && genreData.map(genre => {
        return (
          <li key={genre.id} >
            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link>
          </li>
        )
      })}
      </ul>
    </GenreNavStyle>
  )  
}

