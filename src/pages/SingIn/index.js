import React from "react";
import{ View , Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function SingIn(){

    const navigation = useNavigation();

    const acessar= () => {
        alert("Bem vindo ao CUCO CUCO.")
    }
    return(
        <View style={styles.container}>
            <animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}> 
                <Text style={styles.message}> Bem vindo(a)!</Text>
            </animatable.View>

            <animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput placeholder="Digite um email..." style={styles.input}/>

            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Sua senha..." style={styles.input}/>

            <TouchableOpacity style={styles.button} onPress={() => acessar()}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}
            onPress ={() => navigation.navigate('Register')}
            >
                <Text style={styles.registerText}>Clique aqui para criar uma nova conta.</Text>
            </TouchableOpacity>

            </animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#53B7B7'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        fontWeight: 'Inter'
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize:16,
    },
    button:{
        backgroundColor: '#53B7B7',
        width: '100%',
        borderRadius:4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:70,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',
        
    },
    registerText:{
        color: '#9F9FA1 '
    }

})