import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { PosterRandomStyle } from "./PosterRandom.style"
import { usePosterData } from "./PosterProvider"

export const PosterRandom = ({ limit }) => {
  const { posterData } = usePosterData()

  // Data filter function
  const data = useMemo(() => {
    if (!posterData) return []

    if(limit) {
      return posterData
      .sort(function (a, b) {
        return 0.5 - Math.random();
      })
      .slice(0, limit);
    }
  }, [posterData]);

  return (
    <PosterRandomStyle>
      {data &&
        data.map((poster) => {
          return (
            <div key={poster.id}>
              <figure>
                <Link to={`/posters/details/${poster.slug}`}>
                  <img src={poster.image} alt="" />
                </Link>
              </figure>
              <div>
                <h4>{poster.name}</h4>
                <p className="description" dangerouslySetInnerHTML={{ __html: poster.description.substr(0,120) }}></p>
                <p>DKK {poster.price},00</p>
                <Link to={`/posters/details/${poster.slug}`}>Læs mere</Link>
              </div>
            </div>
          )
        })}
    </PosterRandomStyle>
  )
}
