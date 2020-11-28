import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AiOutlineHome, AiOutlineHistory} from 'react-icons/ai';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './src/components/pages/Home';
import History from './src/components/pages/History';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: Colors.blackPearl,
          },
        }}>
        <Tabs.Screen
          name="Coins"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
              <AiOutlineHome
                style={{
                  tintColor: color,
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={History}
          options={{
            tabBarIcon: ({size, color}) => (
              <AiOutlineHistory
                style={{
                  tintColor: color,
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
