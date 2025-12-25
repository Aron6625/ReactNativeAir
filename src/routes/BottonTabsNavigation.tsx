import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

import HomeStackNavigation, {HomeStackParamList} from './HomeStackNavigation'
import ProductsStackNavigation, {ProductsStackParamList} from './ProductsStackNavigation'
import SearchStackNavigation, {SearchStackParamList} from './SearchStackNavigation'
import ReportsStackNavigation, {NotificationParamList} from './ReportsStackNavigation'
import React from 'react'
export type BottomtabsParamList = {
    HOME_STACK: NativeStackNavigationProp<HomeStackParamList>,
    REPORTS_STACK: NativeStackNavigationProp<NotificationParamList>,
    PRODUCTS_STACK: NativeStackNavigationProp<ProductsStackParamList>,
    SEARCH_STACK: NativeStackNavigationProp<SearchStackParamList>,
}
const Tab = createBottomTabNavigator<BottomtabsParamList>();
const BottonTabsNavigation = () => {
  return (
    <Tab.Navigator
         initialRouteName='HOME_STACK'
         screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'HOME_STACK'){
                    iconName = focused
                        ? 'home-sharp'
                        : 'home-outline';
                }else if(route.name === 'SEARCH_STACK'){
                    iconName = focused 
                        ? 'search-sharp'
                        : 'search-outline';
                }else if(route.name === 'PRODUCTS_STACK'){
                    iconName = focused 
                        ? 'file-tray-full-sharp'
                        : 'file-tray-full-outline';
                }else if(route.name === 'REPORTS_STACK'){
                    iconName = focused 
                        ? 'bar-chart-sharp'
                        : 'bar-chart-outline';
                }else {
                    throw new Error(`No icon found for route ${route.name}`);
                }
                return <IoniconsIcon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#0066CC',
            tabBarInactiveTintColor: '#A6A6A6',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 14,
            textTransform: 'capitalize',
            },
            headerShown: false,
        })}

        >
        <Tab.Screen
            name="HOME_STACK"
            component={HomeStackNavigation}
            options={{
            tabBarLabel: 'Inicio'
            }}
        />
        <Tab.Screen
            name="SEARCH_STACK"
            component={SearchStackNavigation}
            options={{
            tabBarLabel: 'Buscar'
            }}
        />
        <Tab.Screen
            name="PRODUCTS_STACK"
            component={ProductsStackNavigation}
            options={{
            tabBarLabel: 'Productos'
            }}
        />
        <Tab.Screen
            name="REPORTS_STACK"
            component={ReportsStackNavigation}
            options={{
            tabBarLabel: 'Reportes'
            }}
        />
        </Tab.Navigator>

  )
}

export default BottonTabsNavigation