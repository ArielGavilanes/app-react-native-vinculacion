import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { COLLECTIONS } from '../enum/collections';
import { ListComponent } from '../components/ListComponent';
import { ProductI } from '../interfaces/ProductI';

type FormattedItem = {
  id: string;
  name: string;
  image: string;
  price: string;
};

export const ProductsScreen = () => {
  const { data, fetchData, loading } = useFirestore(COLLECTIONS.PRODUCTS);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formattedData: FormattedItem[] =
    (data || [])
      .filter((item): item is ProductI => 'price' in item && 'image' in item)
      .map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        price: `$${item.price}`,
      })) ?? [];

  return (
    <ListComponent title="PRODUCTOS" data={formattedData} loading={loading} />
  );
};