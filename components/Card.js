import React, { useState} from "react";
import {View, Image, TouchableOpacity, Text, StyleSheet} from "react-native";

const imagens = [
    'http://hqscomcafe.com.br/wp-content/uploads/2019/07/uno-3.jpg',
    'https://i.pinimg.com/originals/aa/35/5d/aa355dd825ff5e3f384b7a810db3128a.jpg',
    'https://ih1.redbubble.net/image.1058106919.4236/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    'https://i.imgur.com/X6azsAb.jpg'
]

const geradordeImg = () => {    
    const numeros = imagens.length
    const index = Math.floor(Math.random() * numeros)   
    return imagens[index]    
  }


  
export default function Card(){
      const [img, setImage] = useState()

    
    return(
        <View style={styles.card}>                       
           <Image style={styles.img} source={{uri:`${img}`}} />
            <TouchableOpacity
                onPress={() => setImage(geradordeImg)}
            style={styles.btn}>
               <Text style={styles.txt}>GO</Text>     
            </TouchableOpacity>     
        </View>
    )
}

const styles = StyleSheet.create({  
    card:{
        alignItems: 'center',
    },  
    img:{
        height: 500,
        width: 300,
        
    },
    btn:{
        marginTop:40,
        backgroundColor: '#FF55ff',
        width:150,
        height:50,
        borderRadius: 8,
        padding: 10
    },
    txt:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize:20,
        fontWeight: 'bold',
    }
})