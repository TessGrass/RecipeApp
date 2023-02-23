import 'react-native-gesture-handler';
import { StatusBar, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealsOverViewScreen from './screens/MealsOverviewScreen'
import MealsDetailsScreen from './screens/MealsDetailsScreen'
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator() 
// Stack is an object with two properties where every properties holds an object that acts like a component.
// Stack.Screen allows us to register a screen that will be manage by the Stack.Navigator.
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      title: "All Categories",
      sceneContainerStyle: {backgroundColor: '#3f2f25'}, // To set background color when using drawer, sceneContainerStyle must be used.
    }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorites" component={FavoriteScreen} />
  </Drawer.Navigator>
}

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
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            contentStyle: {backgroundColor: '#3f2f25'},
            }}>
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="MealsOverView" 
            component={MealsOverViewScreen}
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealsDetailsScreen}
            options={{
              title: "About the Meal"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})
