import { ScrollView, View } from "react-native";
import { Category } from "../components/Category";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { CategoryScreenQuery } from "./__generated__/CategoryScreenQuery.graphql";

export function CategoryScreen(): React.JSX.Element {
    const safePadding = '5%';

    const myQuery = graphql`
        query CategoryScreenQuery {
          products {
            products {
              sku
            }
          }
        }
      `;
    const query = useLazyLoadQuery<CategoryScreenQuery>(myQuery, {});

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
                style={{
                    paddingHorizontal: safePadding,
                    paddingTop: safePadding,
                    paddingBottom: '15%'
                }}>
                {query.products.products.map(product => <Category key={product.sku} category={product.sku}></Category>)}
                <Category category='Hello'></Category>
                <Category category='World'></Category>
                <Category category='!!!5'></Category>
            </View>
        </ScrollView>
    )
}