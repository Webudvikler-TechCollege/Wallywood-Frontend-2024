/**
 * Udskriver billede på forside
 * Kan skiftes ud med et slideshow
 */
import { SlideWrapperStyle } from './SlideWrapperStyle';
import Curtain from '../../Assets/images/curtain.jpg';

export default function SlideWrapper() {
  return (
	<SlideWrapperStyle>
		<img src={Curtain} alt="Wallywood" />
	</SlideWrapperStyle>
  );
}
