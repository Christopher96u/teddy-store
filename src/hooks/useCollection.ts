import { useEffect, useState } from 'react';
import { db } from '@utils/firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import IImage from '@interfaces/Slider/Image.interface';
interface IUseCollection {
  collectionName: string;
}
const useCollection = ({ collectionName }: IUseCollection) => {
  const [notes, setNotes] = useState<IImage[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const notesSnapshot = async () => {
    try {
      const r = await getDocs(collection(db, collectionName));
      console.log('LLAMO A FIREBASE');
      console.log('RESPUESTA DE FIREBASE', r);
      const response = r.docs.map((doc) => doc.data());

      setNotes(response as unknown as IImage[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //
    const fetchCollection = async () => {
      setIsLoading(true);
      await notesSnapshot();
      setIsLoading(false);
    };
    void fetchCollection();
  }, []);
  return { notes, isLoading };
};
export default useCollection;
