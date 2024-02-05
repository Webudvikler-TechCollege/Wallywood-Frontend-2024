import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { PosterRandom } from "../../Components/Posters/PosterRandom"
import SlideWrapper from "../../Components/SlideWrapper/SlideWrapper"

export const Home = () => {
  return (
    <>
      <SlideWrapper />
      <ContentWrapper        
        description="Her finder du nye og gamle film plakater"
        subtitle="Udvalgte plakater"
      >
        <PosterRandom limit="2" />
      </ContentWrapper>
    </>
  )
}