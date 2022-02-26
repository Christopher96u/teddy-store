import IDot from '@interfaces/Slider/Dot.interface';

const Dot = ({ className, isActive, onClick }: IDot) => {
  return <div className={`${className} bg-white rounded-full my-1 mx-2 w-2 h-2 ease-in-out duration-700 ${isActive ? 'opacity-100 h-3 w-3 mt-0' : 'opacity-50'} cursor-pointer`} onClick={onClick}></div>;
};
export default Dot;
