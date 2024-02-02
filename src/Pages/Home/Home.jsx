import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import SlideWrapper from "../../Components/SlideWrapper/SlideWrapper"

export const Home = () => {

  return (
    <>
      <SlideWrapper />
      <ContentWrapper
        title="Velkommen"
        description="Her finder du nye og gamle film plakater"
        subtitle="Alt i filmplakater"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        necessitatibus dicta, neque dignissimos odio fugiat enim fuga temporibus
        soluta recusandae itaque illo vitae, totam dolore distinctio praesentium
        accusantium. Maxime, aspernatur.
      </ContentWrapper>
    </>
  )
}