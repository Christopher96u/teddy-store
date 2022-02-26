interface IIndicator {
  currentSlide: number;
  amountSlides: number;
  nextSlide: (slideIndex?: number) => void;
}
export default IIndicator;
