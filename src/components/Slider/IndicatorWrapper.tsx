import IIndicatorWrapper from '@interfaces/Slider/IndicatorWrapper.interface';

const IndicatorWrapper = ({ children, className }: IIndicatorWrapper) => {
  return <div className={`${className}`}>{children}</div>;
};
export default IndicatorWrapper;
