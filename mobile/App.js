/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';



import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import logoImg from "./src/assets/imgMain.jpg";


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Image source={logoImg} style={styles.imageMain} />
            <View style={{ marginTop: 50 }}>


              <TouchableOpacity
                style={styles.btnDefault}
                onPress={() => { }}
              >
                <Text style={styles.btnDefaultText}>Novo Boletim</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnDefault}
                onPress={() => { }}
              >
                <Text style={styles.btnDefaultText}>Buscar Boletim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  imageMain: {
    width: '100%',
    height: 400,
    resizeMode: 'stretch'
  },
  btnDefault: {
    backgroundColor: '#1E6738',
    marginTop: 100
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

export default App;
