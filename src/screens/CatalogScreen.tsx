import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function CatalogScreen() {
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>Here will be products soon</Text>
            </ScrollView>
        </SafeAreaView>
    )
}