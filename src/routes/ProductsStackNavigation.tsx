import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProductScreen from '../screen/app/products/ProductScreen'

export type ProductsStackParamList = {
  PRODUCTS_SCREEN: undefined,
}

const Stack = createNativeStackNavigator<ProductsStackParamList>()

const ProductsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PRODUCTS_SCREEN'
        component={ProductScreen}
        options={{
          title: "This is a Favorities screen"
        }}
      />
    </Stack.Navigator>
  )
}

export default ProductsStackNavigation