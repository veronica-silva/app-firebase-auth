import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebaseConfig"
import { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, Vibration, View } from 'react-native'

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = () => {
        if (!email || !senha) {
            Vibration. vibrate();
            Alert.alert("Atenção", "você deve preencher todos os campos");
            return;
        }


        signInWithEmailAndPassword(auth, email, senha).then( ()=>{
            navigation.replace("AreaLogada")
        } ).catch( (error)=> {
            let mensagem;
            switch(error.code){
                case "auth/user-not-found":
                    mensagem = "confirme o usuário";
                    break;
                case "auth/wrong-password":
                    mensagem = "confirme a senha";
                    break;
                default:
                    mensagem = "Houve um erro, tente novamente mais tarde"
                    break;
            }
            Alert.alert("ops", mensagem)
        });
    };

    const recuperaSenha = () =>{
        sendPasswordResetEmail(auth, email).then( () => {
            Alert.alert("Verifique sua caixa de entrada")
        }).catch((error) => console.log(error));
    } 

    return (
        <View style={estilos.container}>
            <View style={estilos.formulario}>
                <TextInput
                    placeholder='E-mail'
                    style={estilos.input}
                    keyboardType="email-address"
                    onChangeText={valor=>setEmail(valor)}
                />
                <TextInput
                    placeholder='Senha'
                    style={estilos.input}
                    secureTextEntry
                    onChangeText={valor=>setSenha(valor)}
                />
                <View style={estilos.botoes}>
                    <Button title='Entre' onPress={login} color="green" />
                </View>
                <View style={estilos.botoes}>
                    <Button title='Recuperar Senha' onPress={recuperaSenha} color="green" />
                </View>
            </View>
        </View>
    )
}

export default Login

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formulario: {
        marginBottom: 32,
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