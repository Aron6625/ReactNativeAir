
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReportsScreen from '../screen/app/Reports/ReportsScreen';

export type NotificationParamList = {
  REPORTS_SCREEN: undefined,
}

const Stack = createNativeStackNavigator<NotificationParamList>();

const ReportsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='REPORTS_SCREEN'
        component={ReportsScreen}
        options={{
          title: "This is a Reports screen"
        }}
      />
    </Stack.Navigator>    
  )
}

export default ReportsStackNavigation