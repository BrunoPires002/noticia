import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/styles';

export const ImagemNoticia = () => {
    const edinaldo = require('../assets/img/noticia.jpg')
    
    return (
        <View style={styles.container}>
             <Image
        style={styles.stretch}
        source={edinaldo}
      />
        </View>
    );
}

export default ImagemNoticia;