
import { StatusBar, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverViewScreen from './screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator() 
// Stack is an object with two properties where every properties holds an object that acts like a component.
// Stack.Screen allows us to register a screen that will be manage by the Stack.Navigator.

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
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ contentStyle: {backgroundColor: '#f6f6f6'}}}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})
