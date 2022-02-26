import ISlide from '@interfaces/Slider/Slide.interface';
const Slide = ({ children, style }: ISlide) => {
  return (
    <div className={'h-full w-screen shrink-0 bg-cover bg-center transition-all ease-in-out duration-700'} style={style}>
      {children}
    </div>
  );
};
export default Slide;
