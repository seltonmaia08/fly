import react from "react";

import React, { useRef, useState } from "react";
import { TouchableOpacity, DrawerLayoutAndroid, Image, Text, View, TextInput, Button } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";

export default function Home() {

    const drawer = useRef(null);
    const image = require('../../../assets/img/logo.png')
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Image source={image} style={{ width: 200, height: 100 }} />
            <Text style={styles.title}>FLYING TO THE HORIZON</Text>
            <TouchableOpacity style={styles.btnMenu}>
                <FontAwesome5 style={styles.iconsMenu} name="home" size={20} color="#000" />
                <Text style={styles.textBtn}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMenu}>
                <FontAwesome5 style={styles.iconsMenu} name="bed" size={20} color="#000" />
                <Text style={styles.textBtn}>Hosting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMenu}>
                <FontAwesome5 style={styles.iconsMenu} name="ticket-alt" size={20} color="#000" />
                <Text style={styles.textBtn}>Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMenu}>
                <FontAwesome5 style={styles.iconsMenu} name="box-open" size={20} color="#000" />
                <Text style={styles.textBtn}>Packages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMenu}>
                <FontAwesome5 style={styles.iconsMenu} name="percent" size={20} color="#000" />
                <Text style={styles.textBtn}>Offers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSwitch}>
                <Text style={styles.textBtnSwitch}>Switch user</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogOff}>
                <Text style={styles.textBtnLog}>Log off</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            style={styles.home}
            ref={drawer}
            drawerWidth={350}
            drawerPosition={"left"}
            renderNavigationView={navigationView}>
            <View style={styles.home}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => drawer.current.openDrawer()}
                        style={styles.btnMenuHeader}>
                        <Ionicons name="menu" size={28} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>WELCOME</Text>
                    <TouchableOpacity
                        style={styles.btnUser}>
                        <Ionicons name="person-circle" size={28} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        keyboardType="web-search"
                        placeholder="What do you want?" />
                    <Ionicons style={styles.searchBtn} name="search" size={25} color="#000" />
                </View>
                <Text style={styles.textLabel}>Suggestions for lodging</Text>
                <View style={styles.sliderContainer}>
                    <View style={styles.slider} ></View>
                    <View style={styles.slider} ></View>
                    <View style={styles.slider} ></View>
                </View>
            </View>
        </DrawerLayoutAndroid >
    );
};