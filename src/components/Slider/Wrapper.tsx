import IWrapper from '@interfaces/Slider/Wrapper.interface';
const Wrapper = ({ children }: IWrapper) => {
  return <div className={'h-screen flex flex-nowrap overflow-x-hidden relative'}>{children}</div>;
};
export default Wrapper;
