import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import { RootStackParamList } from './src/types/RoutingTypes';
import { HomeScreen } from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from './src/types/TabsTypes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { CatalogueScreen } from './src/screens/CatalogueScreen';
import { CartScreen } from './src/screens/CartScreen';
import { PromotionScreen } from './src/screens/PromotionScreen';
import { CartProvider } from './src/context/CartContext';
import { SingleProductScreen } from './src/screens/SingleProductScreen';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<HomeTabParamList>();
  const NavigationStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      </Stack.Navigator>
    );
  };

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 1,
            borderTopColor: 'black',
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          animation: 'shift',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ size, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color="black"
                style={{
                  transform: [{ scale: focused ? 1.2 : 1 }],
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Catalogue"
          component={CatalogueScreen}
          options={{
            tabBarLabel: 'Catalogo',
            tabBarIcon: ({ size, focused }) => (
              <Ionicons
                name={focused ? 'book' : 'book-outline'}
                size={size}
                color="black"
                style={{
                  transform: [{ scale: focused ? 1.2 : 1 }],
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Promotions"
          component={PromotionScreen}
          options={{
            tabBarLabel: 'Promociones',
            tabBarIcon: ({ size, focused }) => (
              <Ionicons
                name={focused ? 'add' : 'add-outline'}
                size={size}
                color="black"
                style={{
                  transform: [{ scale: focused ? 1.2 : 1 }],
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Carrito',
            tabBarIcon: ({ size, focused }) => (
              <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={size}
                color="black"
                style={{
                  transform: [{ scale: focused ? 1.2 : 1 }],
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <CartProvider>
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
          <NavigationContainer>
            <NavigationStack />
          </NavigationContainer>
        </SafeAreaView>
      </CartProvider>
    </SafeAreaProvider>
  );
};
