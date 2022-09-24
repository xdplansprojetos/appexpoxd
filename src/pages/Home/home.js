import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-paper';
import AvatarImage from '../../components/Avatar/avatar';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
    logoStyle: {
        width: 350,
        height: 150,
    },
})



function HomeScreen({ navigation }) {
    return (

        <>
        <WebView
                source={{ uri: 'https://xdplans.tech' }}
            />
        </>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Pagina Inicial</Text>
            

            

            

        // </View>
    );
}

export default HomeScreen