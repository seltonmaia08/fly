import react, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import firebase from "../../config/firebase";
import styles from "./style";

export default function Register({ navigation }) {

    const image = require('../../../assets/img/logo.png')
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')
                setEmail
                setPass
            })
            .catch((error) => {
                console.error(error)
            })

    useEffect(() => {

    }, [])

    

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={image} />
            <Text style={styles.title}>FLYING TO THE HORIZON</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='João Martins' />
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='exemple@email.com'
                    onChangeText={(text) => setEmail(text)}
                    value={email} />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter a password'
                    maxLength={10}
                    onChangeText={(text) => setPass(text)}
                    value={pass}>
                        
                    </TextInput>
                <TouchableOpacity
                    onPress={() => auth}
                    style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}