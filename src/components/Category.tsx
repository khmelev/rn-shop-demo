import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { html, css } from 'react-strict-dom';

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
          <html.p style={strictStyle.button} onClick={onPress}>{category}</html.p>
        </View>
      );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffccdd',
    width: '50%',
  }
})

const strictStyle = css.create({
  button: {
    backgroundColor: '#ffaaee',
    width: '50%',
  }
})