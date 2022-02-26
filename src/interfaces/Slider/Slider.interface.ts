import { ReactNode } from 'react';
interface IImage {
  url: string;
  name: string;
}
interface ISlider {
  images: IImage[];
  autoPlay?: boolean;
  autoPlayTime?: number;
  children?: ReactNode;
}
export default ISlider;
