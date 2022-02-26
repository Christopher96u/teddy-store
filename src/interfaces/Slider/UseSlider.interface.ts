import { DocumentData } from 'firebase/firestore';
import IImage from "@interfaces/Slider/Image.interface";

interface IUseSlider {
    images: IImage[] | [] | DocumentData[];
    autoPlayTime: number;
    autoPlay: boolean;
  }
export default IUseSlider;  