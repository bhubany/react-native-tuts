/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import Alert from './Components/Alert.native';
import ClassComp from './Components/ClassComp.native';
import DrawerNavigation from './Components/DrawerNavigation.native';
import FlexBasic1 from './Components/FlexBasic1.native';
import FormComp from './Components/FormComp.native';
import Login from './Components/Login.native';
// import NavigationComp from './Components/NavigationComp.native';
import PropsComp from './Components/PropsComp.native';
// import createAppContainer from './Components/StackNavigation.native';
import StateComp from './Components/StateComp.native';
import StyleComp from './Components/StyleComp.native';
import TextInputComp from './Components/TextInputComp.nativev';

const Stack = createNativeStackNavigator();

const App = () => {
  const data = 'Props Data from APP.js';
  return (
    // <NavigationContainer>
    //   {/* <View>
    //     <Text>Hello World!</Text>
    //   </View> */}
    //   <Stack.Navigator>
    //     <Stack.Screen name="home" component={NavigationComp} />
    //     <Stack.Screen name="details" component={ClassComp} />
    //   </Stack.Navigator>
    //   {/* <Login />
    //   <Alert />
    //   <ClassComp />
    //   <PropsComp data={data} />
    //   <StateComp />
    //   <StyleComp /> */}
    //   {/* <TextInputComp /> */}
    //   {/* <FormComp /> */}
    //   {/* <FlexBasic1 /> */}
    // </NavigationContainer>
    <DrawerNavigation />
  );
};

export default App;
