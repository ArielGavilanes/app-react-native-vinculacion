import { Text } from 'react-native';

type ScreenTitleComponentProps = {
  title: string;
};

export const ScreenTitleComponent = ({ title }: ScreenTitleComponentProps) => {
  return (
    <Text className="text-center text-2xl font-bold pb-2 mt-4">{title}</Text>
  );
};
