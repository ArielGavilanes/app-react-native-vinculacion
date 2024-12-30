import { CatalogueScreen } from './../screens/CatalogueScreen';
import { CartScreen } from './../screens/CartScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './RoutingTypes';

export type HomeScreen = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type CartScreen = NativeStackNavigationProp<RootStackParamList, 'Cart'>;
export type CatalogueScreen = NativeStackNavigationProp<
  RootStackParamList,
  'Catalogue'
>;
