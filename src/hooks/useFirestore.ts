import { CategoryI } from './../interfaces/CategoryI';
import { useState } from 'react';
import { ProductI } from '../interfaces/ProductI';
import { PromotionI } from '../interfaces/PromotionI';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/db';
import { COLLECTIONS } from '../enum/collections';

export const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<
    ProductI[] | CategoryI[] | PromotionI[] | null
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

  const fetchProductByCategory = async (categoryId: string) => {
    const productsRef = collection(db, COLLECTIONS.PRODUCTS);
    const q = query(productsRef, where('category_id', '==', categoryId));
    const querySnapshot = await getDocs(q);
  };

  return { data, fetchData, loading };
};
