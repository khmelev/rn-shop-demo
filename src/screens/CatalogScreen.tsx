import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Catalog'>

export function CatalogScreen({ navigation, route }: Props) {
    const safePadding = '5%';

    const onPressHandler = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }
    const text = route.params.category ? 'Current category ' + route.params.category : 'Here will be products soon'
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{
                    paddingHorizontal: safePadding,
                    paddingVertical: safePadding
                }}>
                <Text onPress={onPressHandler}>{text}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}