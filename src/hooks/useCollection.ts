import  IImage  from '@interfaces/Slider/Image.interface';
import { useEffect, useState } from 'react';
import { db } from '@utils/firebase/firestore';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
interface IUseCollection {
  collectionName: string;
}
const useCollection = ({ collectionName }: IUseCollection) => {
  const [notes, setNotes] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const notesSnapshot = async () => {
    try {
      const fetchDocs = await getDocs(collection(db, collectionName));
      console.log('Response from Firebase', fetchDocs);
      const response = fetchDocs.docs.map((doc) => doc.data());
      setNotes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
