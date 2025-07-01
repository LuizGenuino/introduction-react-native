import { useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import { Button } from "../components/button/Index"
import { Input } from "../components/input"

export default function Index(){
    const [name, setName] = useState<string>()

    function handleMessage(){
        return Alert.alert("Usando Alerta!")
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Ola! {name}</Text>
            <Input onChangeText={setName}/>
            <Button title="Entrar" onPress={handleMessage}/>
            <Button title="Sair" onPress={handleMessage}/>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },

    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold"
    }
})