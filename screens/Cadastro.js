import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const Cadastro = () => {

    const [email, setEmail] = useState("")

    return (
        <View style={estilos.container}>
            <View style={estilos.formulario}>
                <TextInput
                    placeholder='E-mail'
                    style={estilos.input}
                    keyboardType="email-address"
                    onChangeText={valor => setEmail(valor)}
                />
                <TextInput
                    placeholder='Senha'
                    style={estilos.input}
                    secureTextEntry
                    onChangeText={}
                />
                <View style={estilos.botoes}>
                    <Button onPress={cadastrar} title='Cadastre-se' color="blue" />
                </View>

            </View>
        </View>
    )
}

export default Cadastro

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formulario: {
        marginVertical: 16,
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        marginVertical: 8,
        padding: 8,
        borderRadius: 4
    },
    botoes: {
        marginVertical: 8,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})