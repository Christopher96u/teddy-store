import IndicatorWrapper from '@components/Slider/IndicatorWrapper';
import Dot from '@components/Slider/Dot';
import IIndicator from '@interfaces/Slider/Indicator.interface';
const Indicator = ({ currentSlide, amountSlides, nextSlide }: IIndicator) => {
  return (
    <IndicatorWrapper className="flex absolute justify-center w-full bottom-0">
      {Array(amountSlides)
        .fill(1)
        .map((_, index) => (
          <Dot key={index} isActive={currentSlide === index} onClick={() => nextSlide(index)} />
        ))}
      <span className="text-white">
        {currentSlide + 1} de {amountSlides}
      </span>
    </IndicatorWrapper>
  );
};
export default Indicator;
