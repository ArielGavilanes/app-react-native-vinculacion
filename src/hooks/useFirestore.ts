import { CategoryI } from './../interfaces/CategoryI';
import { useState } from 'react';
import { ProductI } from '../interfaces/ProductI';
import { PromotionI } from '../interfaces/PromotionI';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../utils/db';
import { COLLECTIONS } from '../enum/collections';

export const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<
    ProductI[] | CategoryI[] | PromotionI[] | null
  >(null);
  const [specificData, setSpecificData] = useState<
    ProductI | CategoryI | PromotionI | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, collectionName));
      if (collectionName == COLLECTIONS.PRODUCTS) {
        const items: ProductI[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductI[];
        setData(items);
      }

      if (collectionName == COLLECTIONS.CATEGORIES) {
        const items: CategoryI[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as CategoryI[];
        setData(items);
      }

      if (collectionName == COLLECTIONS.PROMOTIONS) {
        const items: PromotionI[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as PromotionI[];
        setData(items);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  const fetchDataById = async (id: string) => {
    try {
      setLoading(true);
      const docRef = doc(db, collectionName, id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const itemData = { id: docSnapshot.id, ...docSnapshot.data() };

        if (collectionName == COLLECTIONS.PRODUCTS) {
          setSpecificData(itemData as ProductI);
        } else if (collectionName == COLLECTIONS.CATEGORIES) {
          setSpecificData(itemData as CategoryI);
        } else if (collectionName == COLLECTIONS.PROMOTIONS) {
          setSpecificData(itemData as PromotionI);
        }
      } else {
        console.error('Document not found');
        setData(null);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching document by ID: ', err);
      setLoading(false);
    }
  };

  return { data, fetchData, loading, fetchDataById, specificData };
};
