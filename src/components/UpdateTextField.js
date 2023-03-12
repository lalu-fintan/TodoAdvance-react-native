import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const UpdateTextField = ({updateInput, setUpdateInput, changeHandler}) => {
  return (
    <View>
      <View style={styles.updateContainer}>
        <TextInput
          style={styles.updateField}
          value={updateInput}
          onChangeText={text => setUpdateInput(text)}
        />
        <TouchableOpacity style={styles.updatebtn}>
          <Text style={styles.updatebtnText} onPress={changeHandler}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateTextField;

const styles = StyleSheet.create({
  updateContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    borderColor: '#fff',
    justifyContent: 'space-between',
  },
  updateField: {
    borderRadius: 10,
    width: '80%',
    borderColor: '#fff',
    color: '#fff',
    fontSize: 16,
  },
  updatebtn: {
    backgroundColor: '#0000FF',
    borderRadius: 10,
    padding: 15,
  },
  updatebtnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
