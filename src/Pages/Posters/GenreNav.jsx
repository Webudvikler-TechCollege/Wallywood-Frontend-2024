import { NavLink } from "react-router-dom";
import { useGenre } from "../../Components/Providers/GenreProvider";
import { GenreNavStyle } from "./GenreNav.style";

export const GenreNav = () => {
  const { genreData } = useGenre()

  return (
    <GenreNavStyle>
      <ul>
        {genreData && genreData.map(genre => {
          return (
            <li key={genre.id}>
              <NavLink to={genre.slug}>{genre.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </GenreNavStyle>
  )  
}