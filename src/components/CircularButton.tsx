import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type CircularButtonProps = {
  action: () => void;
  icon: string;
};

export const CircularButton = ({ action, icon }: CircularButtonProps) => {
  return (
    <TouchableOpacity onPress={action} className="bg-black p-2 rounded-full">
      <Ionicons name={icon} size={20} color="white" />
    </TouchableOpacity>
  );
};
