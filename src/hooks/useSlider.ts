import IImage from '@interfaces/Slider/Image.interface';
import { useState, useEffect } from 'react';
interface IUseSlider {
  images: IImage[] | [];
  autoPlayTime: number;
}
const useSlider = ({ images, autoPlayTime }: IUseSlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return { currentSlide, nextSlide };
};
export default useSlider;
