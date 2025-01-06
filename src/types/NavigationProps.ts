import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './RoutingTypes';
import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from './TabsTypes';

export type HomeScreenScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type CartScreenScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;
export type CatalogueScreenScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Catalogue'
>;
export type ProductsByCategoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductsByCategory'
>;
export type SingleProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleProduct'
>;
export type ProductByCategoryRouteProp = RouteProp<
  RootStackParamList,
  'ProductsByCategory'
>;
export type SingleProductRouteProp = RouteProp<
  RootStackParamList,
  'SingleProduct'
>;

export type TabsNavigationProp = BottomTabNavigationProp<HomeTabParamList>;
