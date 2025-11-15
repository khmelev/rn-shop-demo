import React, { PropsWithChildren } from 'react';
import { View, Text, useColorScheme } from 'react-native';

type CategoryProps = PropsWithChildren<{
  category: string;
}>;

export function Category({children, category}: CategoryProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
          <Text>
            {category}
          </Text>
        </View>
      );
}