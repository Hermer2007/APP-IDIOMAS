import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigators/AppNavigator';

import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './locales/en.json'
import es from './locales/es.json'

const translations = {
  en: en,
  es: es,
};
export const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? 'en';

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;


export default function App() {

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
