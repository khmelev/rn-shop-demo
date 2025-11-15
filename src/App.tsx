import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';
import { RelayEnvironment } from './transport/RelayEnvironment';
import { CategoryScreen } from './screens/CategoryScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';  
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <CategoryScreen>
      </CategoryScreen>
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
