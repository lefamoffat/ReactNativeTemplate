import React, {useState, useMemo, useEffect, useReducer} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';

import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';

import {AuthContext} from './components/context';

import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [userToken, setUserToken] = useState(null);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken('fdsfdsf');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        if (userName == 'user' && password == 'pass') {
          console.log(userToken);
          try {
            userToken = 'dsfsdf';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        setUserToken('fdsfdsf');
        setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      //   setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomePage" component={MainTabScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
