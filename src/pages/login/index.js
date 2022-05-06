import React, { useState, useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

import { Ionicons } from '@expo/vector-icons'



export default function Login({ navigation }) {

    const image = require('../../../assets/img/logo.png')
    const [showPass, setShowPass] = useState(null)
    const [securityPass, setSecurityPass] = useState(true)
    const [iconName, setIconName] = useState("eye-outline")

    function show() {
        if (showPass != null) {
            setIconName("eye-off-outline")
            setSecurityPass(false)
            return
        }
            setIconName("eye-outline")
            setShowPass(true)
            return
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={image} />
            <Text style={styles.title}>FLYING TO THE HORIZON</Text>
            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='exemple@email.com' />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={showPass}
                    secureTextEntry={securityPass}
                    placeholder='Enter your password' maxLength={10} />
                <Ionicons name={iconName} size={24} color="#000" onPress={() => show()} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={styles.btnRegister}>
                    <Text style={styles.textBtn}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}