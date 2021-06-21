import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Mymap from '../../components/Mymap';

const HomeUser = () => {

    return ( 
        <View style={styles.containerHome}>
            <Mymap />
        </View>
    );
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
    },
});
 
export default HomeUser;