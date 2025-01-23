import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Box } from 'native-base';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import DigestScreen from '../screens/DigestScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarStyle: Platform.select({
            ios: {
              paddingBottom: 20
            },
            android: {
              paddingBottom: 0
            }
          })
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <Box>
                <Ionicons name="home-outline" size={24} color={color} />
              </Box>
            ),
            title: '订阅源'
          }}
        />
        <Tab.Screen
          name="Digests"
          component={DigestScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <Box>
                <Ionicons name="newspaper-outline" size={24} color={color} />
              </Box>
            ),
            title: '摘要'
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <Box>
                <Ionicons name="settings-outline" size={24} color={color} />
              </Box>
            ),
            title: '设置'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;