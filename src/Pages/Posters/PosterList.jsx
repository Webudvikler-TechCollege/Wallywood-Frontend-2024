import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { PosterListStyle } from "./PosterList.style"
import { usePosterData } from "../../Components/Providers/PosterProvider"

export const PosterList = () => {
  const { posterData } = usePosterData()
  const { genre } = useParams({ genre: 'drama' })

  // Data filter function
  const data = useMemo(() => {
    if (!posterData) {
      return [];
    }
    if (genre) {
      // Filtrering ud fra søgeresultat
      return posterData.filter(x => x.genres.some(y => y.slug === genre))
    } else {
      // Random sortering og slice
      return posterData
        .sort(function (a, b) {
          return 0.5 - Math.random();
        })
        .slice(0, 10);
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
