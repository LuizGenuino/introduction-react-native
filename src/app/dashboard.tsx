import { Text, View, StyleSheet } from "react-native";
import { Button } from "../components/button/Index";
import { router } from "expo-router";

export default function Dashboard() {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Dashboard</Text>
            <Button title="Voltar" onPress={()=> router.back()}/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    }
})