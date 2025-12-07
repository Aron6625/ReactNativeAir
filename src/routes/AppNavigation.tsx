import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomenScreen from '../screen/WelcomeScreen';
import EventScreen from '../screen/EventScreen';
import { colors } from '../themes/colors';
import { Text } from 'react-native';
import HomeScreen from '../screen/HomeScreen';

export interface Data {
  name: string
  age: number
  course: string
  test: string
}

export type RootNavigationParamList = {
  WelcomeScreen: undefined;
  EventScreen: Data;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen}
              options={{ title: 'Home' }} />
            <Stack.Screen 
            name="WelcomeScreen" 
            component={WelcomenScreen}
            options={{ 
                title: 'Welcome', 
                headerShown: true,
                headerTintColor: '#301c41',
                headerStyle: {       
                    backgroundColor: '#fc354c',
                },
                headerLeft: () => {
                  return (
                    <Text style={{color: colors.black, fontSize: 18, marginRight: 10}}>👋
                    </Text>
                  )
                },
            }
            } />
            <Stack.Screen 
              name="EventScreen" 
              component={EventScreen}
              options={{
                headerRight: () => {
                  return (
                    <Text style={{color: colors.black, fontSize: 18, marginRight: 10}}>🎉</ Text>
                  )
                },
              }}
              />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation