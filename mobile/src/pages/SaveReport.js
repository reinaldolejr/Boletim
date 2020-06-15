import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

const SaveReport = () => {
  const [value, onChangeText] = React.useState('');


  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View>
          
          <Text>Nome da turma</Text>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Text>Matéria</Text>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>

      </ScrollView>
    </>
  )
}

export default SaveReport

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
  },
})
