import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

type CircularButtonProps = {
  action: () => void;
  icon: string;
};

export const CircularButton = ({ action, icon }: CircularButtonProps) => {
  return (
    <TouchableOpacity
      onPress={action}
      className="p-2 rounded-full"
      style={styles.button}
    >
      <Ionicons name={icon} size={20} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.tertiary,
  },
});
