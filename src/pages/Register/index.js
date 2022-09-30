import React, { useState } from "react";
import{ 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function Register(){

    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[cep, setCep] = useState('');
    const[senha, setSenha] = useState('');

    const navigation = useNavigation();

    const cadastro= () => {
        alert("Cadastro Efetivado.")
    }

    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/LogoAzul.png')}
            style={{ width: 100, height: 100}}
            />

            <Text style={styles.nomeApp}>cuco cuco</Text>
            </View>

            <TextInput placeholder="Nome Completo" style ={styles.textInput} onChangeText={text=>setNome(text)}/>
            <TextInput placeholder="Email (example@gmail.com)" style ={styles.textInput} onChangeText={text=>setEmail(text)}/>
            <TextInput placeholder="CEP ( 00000-000 )" style ={styles.textInput} onChangeText={Number=>setCep(Number)}/>
            <TextInput secureTextEntry={true} placeholder="Senha" style ={styles.textInput} onChangeText={text=>setSenha(text)}/>


            <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
                <Text style={{color:'white', textAlign:'center'}}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancelar} onPress ={() => navigation.navigate('SingIn')}>
                <Text style={{color:'white', textAlign:'center'}}>Cancelar</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20  
    },
    containerLogo:{
        marginTop: '1%',
        marginBottom: '30%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    nomeApp:{
        bottom: '2%',
        fontSize: 15,
        fontWeight: 'inter',
        textAlign: 'center',
        color: '#53B7B7',
    },
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'#DEDEDE',
        borderRadius:20,
        paddingLeft:10,
        marginBottom: 10
    },
    btnCadastro:{
        marginTop: '20%',
        marginBottom: '5%',
        width:'100%',
        height:40,
        backgroundColor:'#53B7B7',
        borderRadius:20,
        justifyContent:'center'
    },
    btnCancelar:{
        width:'100%',
        height:40,
        backgroundColor:'#B75353',
        borderRadius:20,
        justifyContent:'center'
    }
})