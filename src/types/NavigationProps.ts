import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './RoutingTypes';

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
