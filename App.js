import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//new
import * as pages from './App/pages';

/**
 * Stack Navigator Secction
 */
const Stack = createStackNavigator();

//This function returns the Stack Navigator
function NavStack() {
  return (
      //Header option for all of the stack
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen 
          name="Home" 
          component={pages.HomeOverview}
          options ={{       //Specific header for one screen
            title: 'CoRE - Overview',
            headerStyle: {
              backgroundColor: '#1E90FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen 
          name="Details" 
          component={pages.DetailButtons}
          options={({route})=>({title: route.params.name})} />
      </Stack.Navigator>
    
  );
}

/**
 * Drawer Navigation Section
 */
const Drawer = createDrawerNavigator();

  /*Stack to be nested in drawer*/
  const ParamsNav = createStackNavigator();
  function StackParamNav(){
    return(
      
        <ParamsNav.Navigator>
          <ParamsNav.Screen name="Params" component={pages.ParamsFunction}/>
        </ParamsNav.Navigator>
   
    );
  }

  //Return a Drawer Navigator with out container
function NavDrawer()
{
  return(
   
     <Drawer.Navigator initialRouteName="DrawerFunctions">
       <Drawer.Screen name="DrawerFunctions" component={pages.DrawerFunctions}/>
       <Drawer.Screen name="ParamFunctions" component={StackParamNav}/>
     </Drawer.Navigator>
   
  );
}

/**
 * Tab Navigator
 *  -Stack
 *  -Drawer
 */
const Tab = createBottomTabNavigator();
function NavTab(){
  return(
    
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={NavStack}/>
          <Tab.Screen name="Buttons" component={NavDrawer}/>
      </Tab.Navigator>
    
  );
}

//Appp to be exported.
function App(){
  return(
    <NavigationContainer>
        {NavTab()//Choose from NavTab, NavDrawer, NavStack
        }
    </NavigationContainer>
  );
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
