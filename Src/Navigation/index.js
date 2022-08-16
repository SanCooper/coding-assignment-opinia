import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Component} from 'react/cjs/react.production.min';
import {
  ProfilUser,
  Follower,
  Following,
  ProfilDetail,
  FindPerson,
  Search,
  Chat,
} from '../Screens/Screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Profil"
        activeColor="#05B1A1"
        labeled={false}
        barStyle={{backgroundColor: '#FFFFFF'}}>
        <Tab.Screen
          name="Profil"
          component={ProfilUser}
          showlabel={false}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="md-search-sharp" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Person"
          component={FindPerson}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="people" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="md-chatbubbles-sharp" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNav" screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
          <Stack.Screen
            name="Follower"
            component={Follower}
            // options={{
            //     title: 'Pengikut',
            //     headerStyle: {
            //       backgroundColor: '#05B1A1',
            //     },
            //     headerTintColor: '#fff',
            //     headerBlurEffect:true,
            //   }}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Following"
            component={Following}
            // options={{
            //     title: 'Mengikuti',
            //     headerStyle: {
            //       backgroundColor: '#05B1A1',
            //     },
            //     headerTintColor: '#fff',
            //     headerBlurEffect:true,
            //   }}
          />
          <Stack.Screen
            name="ProfilDetail"
            component={ProfilDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
