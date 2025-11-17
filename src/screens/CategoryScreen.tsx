import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Category } from "../components/Category";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { CategoryScreenQuery } from "./__generated__/CategoryScreenQuery.graphql";
import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../App";

export const CategoryScreen: FC<NativeStackScreenProps<StackParamList, 'Categories'>> = ({navigation}) => {
    const safePadding = '5%';

    const openCatalog = () => {
      navigation.navigate('Catalog')
    }

    const myQuery = graphql`
        query CategoryScreenQuery {
          categories {
            categories {
              id
              title
            }
          }
        }
      `;
    const query = useLazyLoadQuery<CategoryScreenQuery>(myQuery, {});

    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
                style={{
                    paddingHorizontal: safePadding,
                    paddingVertical: safePadding
                }}>
                {query.categories.categories.map(category => <Category key={category.id} category={category.title}></Category>)}
                <Text onPress={openCatalog}>Hello</Text>
                <Category category='Hello'></Category>
                <Category category='World'></Category>
                <Category category='!!!5'></Category>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}