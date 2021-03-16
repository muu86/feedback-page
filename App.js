import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PickVideoScreen from './screens/PickVideoScreen';
import FeedbackScreen from './screens/FeedbackScreen';

const VideoStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <VideoStack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#f4511e',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <VideoStack.Screen name="PickVideo" component={PickVideoScreen} options={{ title: '비디오 선택'}} />
        <VideoStack.Screen name="Feedback" component={FeedbackScreen} options={{ title: '분석 결과'}} />
      </VideoStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
