import { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View, ActivityIndicator } from 'react-native'
import {auth} from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {AreaLogada} from "./AreaLogada"

const Cadastro = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    

    const logada = () => {
        navigation.replace("AreaLogada")
    }
    const logar = () => {
        navigation.replace("Inicial")
    }



    const cadastrar = () =>{
        if (!email || !senha) {
            Alert.alert("Se liga, hein!", "preencha todos os campos, animal")
        }

        setLoading(true);

        createUserWithEmailAndPassword(auth, email, senha).then( () =>{
            Alert.alert ("cadastradíssima", 
            "Vai entrar ou não?",

            [
                {
                  text: "não quero agora",
                  onPress: (logar),
                  style: "cancel"
                },
                { text: "entra nessa merda",
                 onPress: (logada),
                 style: "default"
                
                }
              ]
            
            )
        }).catch((error) => {
            console.log(error);
            let mensagem
            switch (error.code) {
                case "auth/email-already-in-use":
                    mensagem = "Email em uso"
                    break;
            
                case "auth/weak-password":
                mensagem = "senha deve ter pelo menos 6 dígitos"
                break;
                case "auth/invalid-email":
                mensagem = "email inválido"
                break;
                default:
                    mensagem = "algo deu errado, tente novamente"
                    break;
            }
            Alert.alert("Atenção", mensagem)
        }).finally(() =>{
            setLoading(false)
        });
    };

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
                    onChangeText={valor => setSenha(valor)}
                />
                <View style={estilos.botoes}>
                    <Button  disabled={loading} onPress={cadastrar} title='Cadastre-se' color="blue" />
                    {loading && <ActivityIndicator/>}
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