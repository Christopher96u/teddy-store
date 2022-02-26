import IUseSlider from '@interfaces/Slider/UseSlider.interface';
import { useState, useEffect } from 'react';

const useSlider = ({ images, autoPlayTime, autoPlay }: IUseSlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      autoPlay && nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return { currentSlide, nextSlide };
};
export default useSlider;
