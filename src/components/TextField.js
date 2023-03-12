import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const TextField = ({
  textField,
  setInputField,
  showHandler,
  isShowing,
  cancelHandler,
  changeItem,
  saveHandler,
  changeHandler,
}) => {
  return (
    <View>
      <View>
        {isShowing ? (
          <View style={styles.textContainer}>
            <TextInput
              value={textField}
              onChangeText={text => setInputField(text)}
              placeholder="what to do..."
              placeholderTextColor="#fff"
              style={styles.textField}
            />
            <TouchableOpacity style={styles.closeIconbtn} onPress={showHandler}>
              <Ionicons
                name="close"
                size={26}
                color="red"
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addIconbtn}
            onPress={id => showHandler(id)}>
            <Text style={styles.addText}>Add Todo</Text>
            <Feather
              name="plus"
              size={26}
              color="#fff"
              style={styles.addIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {isShowing && (
        <View style={styles.btnContainer}>
          {textField == '' ? (
            <View style={styles.savebtn1}>
              <Text style={styles.savebtnText}>Save</Text>
            </View>
          ) : changeItem == false ? (
            <TouchableOpacity style={styles.savebtn2} onPress={saveHandler}>
              <Text style={styles.savebtnText}>save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.savebtn2} onPress={changeHandler}>
              <Text style={styles.savebtnText}>Update</Text>
            </TouchableOpacity>
          )}
          {textField == '' ? (
            <View style={styles.cancelbtn1} onPress={cancelHandler}>
              <Text style={styles.cancelbtnText}>Clear</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.cancelbtn2} onPress={cancelHandler}>
              <Text style={styles.cancelbtnText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
  },
  textField: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    paddingLeft: 20,
    width: Width - 90,
    marginTop: 20,
    marginLeft: 15,
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  closeIconbtn: {
    width: 52,
    height: 52,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 16,
    marginLeft: 8,
  },
  closeIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
  addIconbtn: {
    backgroundColor: '#3ACF3A',
    width: '90%',
    height: 52,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    // position: 'absolute',
    // right: 6,
    top: 10,
  },
  addText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  addIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  savebtn1: {
    backgroundColor: 'green',
    padding: 15,
    width: 80,
    borderRadius: 5,
    opacity: 0.6,
  },
  savebtn2: {
    backgroundColor: 'green',
    padding: 15,
    width: 80,
    borderRadius: 5,
  },
  savebtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  cancelbtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  cancelbtn1: {
    backgroundColor: 'red',
    padding: 15,
    width: 80,
    borderRadius: 5,
    marginRight: 60,
    opacity: 0.6,
  },
  cancelbtn2: {
    backgroundColor: 'red',
    padding: 15,
    width: 80,
    borderRadius: 5,
    marginRight: 60,
  },
});
