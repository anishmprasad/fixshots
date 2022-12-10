// import * as React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Home from './src/pages/Home'
// import Settings from './src/pages/Settings'




// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             key={Math.random()} 
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1, padding:'12px' }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Settings" component={Settings} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './src/navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './src/stores/index'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App
