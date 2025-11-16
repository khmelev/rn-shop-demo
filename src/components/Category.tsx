import React, { PropsWithChildren } from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';

type Props = {
  category: string;
}

export function Category({ category } : Props) {
    return (
        <View>
          <Text style={style.container}>
            {category}
          </Text>
        </View>
      );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffccdd',
    width: '50%',
  }
})