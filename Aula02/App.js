import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

var num1 = 2, num2 = 8, soma, subtracao, divisao, multiplicacao;

soma = num1 + num2;
subtracao = num1 - num2;
divisao = num1 / num2;
multiplicacao = num1 * num2;

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Edinaldo peeeereira
      </Text>

      <Text style={styles.desc}>
        Faça as contas com Edinaldo Pereira
      </Text>

      <Image style={styles.edinaldo}source={require('./img/edinaldo.jpg')} />
      
      <Text>Edinaldo Pereira é show</Text>

      <Text style={styles.contas}>
            numero 1 = {num1} {"\n"}numero 2 = {num2} {"\n"}
            Soma: {num1} + {num2} = {soma} {"\n"}
            Subtracao: {num1} - {num2} = {subtracao} {"\n"}
            Divisão: {num1} / {num2} = {divisao} {"\n"}
            Multiplicacao: {num1} + {num2} = {multiplicacao}
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 100,
    textAlign: "left",
  },
  edinaldo:{
    width: 200,
    height: 200,
  },
  navbar: {
    
    backgroundColor: "#fff",
  },
  contas: {
    fontSize : 20,
    color: "#00000",
  },
  desc: {
    color: "#fff",
    fontSize: 25,
  }
});
