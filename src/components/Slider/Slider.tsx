import Indicator from '@components/Slider/Indicator';
import Wrapper from '@components/Slider/Wrapper';
import Slide from '@components/Slider/Slide';
import Gradient from '@components/Slider/Gradient';
import ChildrenWrapper from '@components/Slider/ChildrenWrapper';
import ISlider from '@interfaces/Slider/Slider.interface';
import useSlider from '@hooks/useSlider';
const Slider = ({ images, autoPlay = true, autoPlayTime = 3000, children }: ISlider) => {
  console.log('autoPlay form prop ', autoPlay);
  const { currentSlide, nextSlide } = useSlider({ images, autoPlayTime, autoPlay });
  return (
    <Wrapper>
      {images.map((img, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${img.url})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : '',
          }}
        ></Slide>
      ))}
      <Gradient />
      <Indicator currentSlide={currentSlide} amountSlides={images.length} nextSlide={nextSlide} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default Slider;
