import { ScrollView, Text, View } from "react-native";
import { Category } from "../components/Category";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { CategoryScreenQuery } from "./__generated__/CategoryScreenQuery.graphql";
import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import NativeShop from "../specs/NativeShop";

export const CategoryScreen: FC<NativeStackScreenProps<RootStackParamList, 'Categories'>> = ({ navigation }) => {
  const safePadding = '5%';

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

  const openCatalog = (category: string) => {
    navigation.navigate('Catalog', { category: category })
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            paddingHorizontal: safePadding,
            paddingVertical: safePadding
          }}>
          {query.categories.categories.map(category =>
            <Category
              key={category.id}
              category={category.title}
              onPress={() => openCatalog(category.title)}
              >
            </Category>)
          }
          <Category category={NativeShop.getItem('sdf') ?? 'Category 6'}></Category>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}