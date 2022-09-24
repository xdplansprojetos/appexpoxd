import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Axios from 'axios'
import { TextInput } from 'react-native-paper';
import { Input } from '@rneui/base';

function ContactUs({ navigation }) {

  const [DadosRick, setDadosRick] = useState([])

  const APIURL = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        console.log("ESTOU VENDO")

      })
      .catch((error) => console.log(error))
  }, [])






  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Input
        placeholder='ID do Personagem de Rick e Morty'
        keyboardType='numeric'
        onChange={idPersonagem => setIdPersonagem(idPersonagem)}
      // value={valordoInput}
      /> */}

      <Image
        // source={{uri:`${linkDaImagem}`}}
        style={{ width: 100, height: 100 }}
      />
      

      {
        DadosRick.map(personagem => <li key={personagem.id}></li>)
      }

      <Text>Personagem: </Text>
      <Text>Gênero : </Text>
      <Text>Status: </Text>
    </View>
  );
}

export default ContactUs