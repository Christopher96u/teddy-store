import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { createCollection } from '@utils/firebase/firestore';
interface IUseCollection {
  collectionName: string;
}
// TODO! REFACTOR useCollection
const useCollection = <T>({ collectionName }: IUseCollection) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const notesSnapshot = async () => {
    try {
      const fetchDocs = await getDocs<T>(createCollection(collectionName));
      console.log('Response from Firebase', fetchDocs);
      const response = fetchDocs.docs.map<T>((doc) => doc.data());
      setData(response);
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
  return { data, isLoading };
};
export default useCollection;
