import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={style.screen}>

      <ScrollView horizontal={false} style={style.scroll}>
        <View style={style.header}>
          <Text style={style.txtheader}>App First</Text>
        </View>
        <View style={style.message}>
          <Text style={style.txtheader}>Seja Bem Vindo</Text>
          <Text style={style.txt}>Aproveite nosso app</Text>
        </View>
        <View style={style.boxImage}>
            <Image style={style.image}source={{uri:
              "https://images.unsplash.com/photo-1690882060999-800618837fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              }} />
            <Image style={style.image} source={{uri:
              "https://images.unsplash.com/photo-1529451310546-178d75816ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=674&q=80"
            }} />
        </View>
        <StatusBar style="auto" />
      </ScrollView>

      
    </View>
  );
}

const style = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    flex: 1.5,
    backgroundColor: '#900',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width:'100%'
  },
  txtheader:{
    fontSize: 15,
    fontWeigth: '500',
    color: '#fff',
    textAlign: 'center'
  },
  txt:{
    color: '#fff',
  },
  message:{
    height: 150,
    backgroundColor: '#300',
    textAlign: 'center',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage:{
    height: 800,
    flexDirection: 'row',
    padding: 10,
  },
  image:{
    flex: 1,
    margin: 10,
  },
  scroll:{
    width: '100%',
  }
})