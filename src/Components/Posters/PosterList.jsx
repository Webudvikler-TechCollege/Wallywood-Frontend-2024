import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { PosterListStyle } from "./PosterList.style"
import { usePosterData } from "./PosterProvider"

export const PosterList = ({ limit }) => {
  const { posterData } = usePosterData()
  const { genre } = useParams({ genre: 'drama' })

  // Data filter function
  const data = useMemo(() => {
    if (!posterData) return []

    if(genre) {
      return posterData.filter(x => x.genres.some(y => y.slug === genre))
    } else {
      if(limit) {
        return posterData
        .sort(function (a, b) {
          return 0.5 - Math.random();
        })
        .slice(0, limit);
      }
    }
  }, [posterData, genre]);

  return (
    <PosterListStyle>
      {data &&
        data.map((poster) => {
          return (
            <div key={poster.id}>
              <figure>
                <Link to={`/posters/details/${poster.slug}`}>
                  <img src={poster.image} alt="" />
                </Link>
              </figure>
              <p>
                <Link to={`/posters/details/${poster.slug}`}>
                  {poster.name}
                </Link>
              </p>
              <p>DKK {poster.price},00</p>              
            </div>
          )
        })}
    </PosterListStyle>
  )
}
