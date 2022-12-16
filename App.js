
import { StatusBar, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import CategoriesScreen from './screens/categoriesScreen'

export default function App() {

  const [fontsLoaded] = useFonts({
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='light'/>
      <CategoriesScreen />
    </>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})
