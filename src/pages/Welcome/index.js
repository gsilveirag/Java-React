import React from "react";
import{ 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as animatable from 'react-native-animatable' 

import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/Logo.png')}
            style={{ width: '100%'}}
            resizeMode ="contain"
            />
            <Text style={styles.nomeApp}>cuco cuco</Text>
        </View>

        <animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}> Monitore, e organize seus horarios em qualquer lugar!</Text>
        <Text style={styles.text}> Faça o login para começar.</Text>
       

        <TouchableOpacity style={styles.button}
        onPress ={() => navigation.navigate('SingIn')}
        >
        <Text style={styles.buttonText}>Entrar</Text>
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
    containerLogo:{
      flex:2,
      justifyContent: 'center',
      alignContent: 'center'
    },
    nomeApp:{
        bottom: '5%',
        fontSize: 26,
        fontWeight: 'inter',
        textAlign: 'center',
        color: '#fff',
    },
    containerForm:{
      flex: 1,
      backgroundColor: '#fff',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%'
    },
    nome:{
        fontSize: 24,
        fontWeight: 'inter',
        textAlign: 'center',
        color: '#fff'
      },
      title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center'
      }, 
      text:{
        color: '#a1a1a1',
        textAlign: 'center'
      },
      text:{
        color: '#a1a1a1',
        textAlign: 'center'
      },
      button:{
        position: 'absolute',
        backgroundColor: '#53B7B7',
        borderRadius:70,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
      }
})