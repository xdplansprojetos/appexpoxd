import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../../pages/Home/home';
import ContactUs from '../../pages/Contact/contact';
import AboutUs from '../../pages/About/about';
import QrCodeApp from '../../pages/QrBar/qrcode'


const Tab = createMaterialBottomTabNavigator();

function BottomMenu () {

  return <Tab.Navigator
  initialRouteName="About"
  activeColor="#e91e63"
  labelStyle={{ fontSize: 12 }}
  style={{ backgroundColor: 'tomato' }}
>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="dog" color="purple" size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="About"
    component={AboutUs}
    options={{
      tabBarLabel: 'About',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="bell" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Contact"
    component={ContactUs}
    options={{
      tabBarLabel: 'Contact',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="QrCode"
    component={QrCodeApp}
    options={{
      tabBarLabel: 'QrCode',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="qrcode" color="black" size={26} />
      ),
    }}
  />
</Tab.Navigator>
}

export default BottomMenu