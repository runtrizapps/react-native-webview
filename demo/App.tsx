import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

function MainScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('webview')}>
        <Text>Launch Browser</Text>
      </TouchableOpacity>
    </View>
  );
}

function WebViewScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'stretch' }}>
      <WebView style={{flex: 1}} source={{ uri: 'https://reactnative.dev/' }} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={MainScreen} />
        <Stack.Screen name="webview" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
