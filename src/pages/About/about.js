import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import Axios from 'axios'




function AboutUs({ navigation }) {

    const [fraseTexto, setFraseTexto] = useState([])

    //const [count, setCount] = useState(0);

    
        setTimeout(() => {
            //setCount((count) => count + 1);

            Axios.get('https://api.adviceslip.com/advice')
                .then((response) => {
                    //console.log(response.data.slip.advice)
                    //let FraseSite = response.data.slip.advice

                    setFraseTexto(response.data.slip.advice)


                    console.log(response.data.slip.advice)
                })
                .catch('ERRO')


        }, 1000);





    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About</Text>
            <Text>{fraseTexto}</Text>
            {/* <Text>{count}</Text> */}
            <Button
                title="About"
                onPress={() => navigation.navigate('Contact')}
            >DETALHES</Button>


        </View>
    );
}

export default AboutUs