
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import TituloNoticia from './componentes/TituloNoticia';
import ImagemNoticia from './componentes/ImagemNoticia';
import TextNoticia  from './componentes/TextNoticia';
import DataHoraNoticia from './componentes/DataHoraNoticia';
import styles from './styles/styles';

export default function App() {
  return (

    <View style={styles.container}>

      {/* START COMPONENTS */}  

      <TituloNoticia/>
      <ImagemNoticia/>
      <TextNoticia/>
      <DataHoraNoticia/>

      
      {/* END COMPONENTS */}

    
    </View>
  );
}
