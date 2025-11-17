import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';
import { RelayEnvironment } from './transport/RelayEnvironment';
import { CategoryScreen } from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CatalogScreen } from './screens/CatalogScreen';

export type StackParamList={
  Categories: undefined;
  Catalog: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>()

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';  
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories'>
          <Stack.Screen
            name='Categories'
            component={CategoryScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name='Catalog'
            component={CatalogScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RelayEnvironmentProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  details: {
    textAlign: 'right',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
