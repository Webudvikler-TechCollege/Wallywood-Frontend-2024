import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { PostersStyle } from './Posters.style'
import { GenreNav } from '../../Components/Genre/GenreNav'
import { Outlet } from "react-router-dom"

export const Posters = () => {
  return (
    <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
      <PostersStyle>
        <div><GenreNav /></div>
        <div>
          <Outlet />
        </div>
      </PostersStyle>
    </ContentWrapper>
  )
}