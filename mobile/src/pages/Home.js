import React from 'react';
import {
  Modal,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

import logoImg from "../assets/imgMain.jpg";


const Home = ({ navigation }) => {
  return (
    < >
      <StatusBar barStyle="light-content" />
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={styles.body}>
        <Image source={logoImg} style={styles.imageMain} />
        <View style={styles.viewButtons}>
          <TouchableOpacity
            style={styles.btnDefault}
            onPress={() => navigation.navigate('SaveReport')}
          >
            <Text style={styles.btnDefaultText}>Novo Boletim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnDefault}
            onPress={() => navigation.navigate('ReportDetails',
              {
                name: "teste",
              })}
          >
            <Text style={styles.btnDefaultText}>Buscar Boletim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: "#fff",
  },
  viewButtons: {
    marginTop: 30
  },
  imageMain: {
    width: '100%',
    height: 500,
    resizeMode: 'stretch'
  },
  btnDefault: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#000000',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#fff'
  },
  btnDefaultText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Home;
