import { SafeAreaView, ScrollView, View } from "react-native";
import { Category } from "../components/Category";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { CategoryScreenQuery } from "./__generated__/CategoryScreenQuery.graphql";

export function CategoryScreen(): React.JSX.Element {
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

    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
                style={{
                    paddingHorizontal: safePadding,
                    paddingVertical: safePadding
                }}>
                {query.categories.categories.map(category => <Category key={category.id} category={category.title}></Category>)}
                <Category category='Hello'></Category>
                <Category category='World'></Category>
                <Category category='!!!4'></Category>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}