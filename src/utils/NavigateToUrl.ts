import { Linking } from 'react-native';

export const openExternalUrl = async (url: string) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error('URL no soportada:', url);
    }
  } catch (error: unknown) {
    console.error('Error al abrir la URL:', error);
  }
};
