import { View } from 'react-native';
import './global.css';
import { RootStackParamList } from './src/types/RoutingTypes';
import { HomeScreen } from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const NavigationStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <View>
      <NavigationStack />
    </View>
  );
};
