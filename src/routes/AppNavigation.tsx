import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottonTabsNavigation, {BottomtabsParamList} from './BottonTabsNavigation';


export type RootStackParamList = {
  BottonTabsNavigation: NativeStackNavigationProp<BottomtabsParamList>
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='BottonTabsNavigation'
        >
            <Stack.Screen 
              name="BottonTabsNavigation" 
              component={BottonTabsNavigation}
              options={{headerShown: false}}
               />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation