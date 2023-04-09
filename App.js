import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductListing from './screens/productListing';
import Favourites from './screens/favourites';
import ProductDetails from './screens/productDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductContext from './context';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        title: 'Product List'
      }} name="ProductListing" component={ProductListing} />
      <Tab.Screen options={{
        title: 'Favourites'
      }} name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
}


export default function App() {


  return (
    <ProductContext>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor : '#fff'
            },
            contentStyle : {
              backgroundColor: '#220577dd'
            }
          }}
        
        >
          <Stack.Screen options={{
            headerShown: false
          }} name="Bottomtabs" component={BottomTabs} />
          <Stack.Screen options={{
            title: 'Product Details'
          }} name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
