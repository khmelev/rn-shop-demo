import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Category } from './components/Category';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const safePadding = '5%';

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            paddingHorizontal: safePadding,
            paddingVertical: safePadding,
          }}>
          <Category category='Hello'></Category>
          <Category category='World'></Category>
          <Category category='!!!'></Category>
        </View>
      </ScrollView>
    </View>
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
