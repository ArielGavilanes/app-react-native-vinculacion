import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeTabParamList } from './TabsTypes';

export type RootStackParamList = {
  Home: undefined;
  Tabs: NavigatorScreenParams<HomeTabParamList>;
  Cart: undefined;
  Catalogue: undefined;
  ProductsByCategory: { categoryId: string };
  SingleProduct: { productId: string };
  Order: undefined;
  Promotion: undefined;
};
