import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  category: string;
  onPress?: () => void
}

export function Category({ category,  onPress } : Props) {
    return (
        <View>
          <Text style={style.container} onPress={onPress}>
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