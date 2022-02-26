import IChildrenWrapper from '@interfaces/Slider/ChildrenWrapper.interface';
const ChildrenWrapper = ({ children }: IChildrenWrapper) => {
  return <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>{children}</div>;
};
export default ChildrenWrapper;
