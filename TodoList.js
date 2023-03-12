import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ListLitem from './src/components/ListLitem';
import TextField from './src/components/TextField';
import UpdateTextField from './src/components/UpdateTextField';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const TodoList = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [textField, setInputField] = useState('');
  const [arr, setArr] = useState([]);
  const [changeItem, setChange] = useState(false);
  const [editID, setEditID] = useState(null);
  const [updateInput, setUpdateInput] = useState('');

  const saveHandler = () => {
    if (textField == '') {
      Alert.alert('', 'enter the value');
    } else {
      const newValue = {
        id: arr.length + 1,
        value: textField,
      };
      setArr([...arr, newValue]);
      setInputField('');
      setIsShowing(false);
    }
  };

  const deleteHandler = id => {
    setArr(item => item.filter(value => value.id !== id));
  };

  const editHandler = id => {
    const findItem = arr.find(item => item.id === id);
    // setInputField(findItem.value);
    setUpdateInput(findItem.value);
    setIsShowing(false);
    setChange(!changeItem);
    setEditID(id);
  };

  const changeHandler = () => {
    const test = {value: updateInput};
    const updated = arr.map(item => {
      if (item.id == editID) {
        return {...item, ...test};
      }
      return item;
    });

    setArr(updated);
    setUpdateInput('');
    setIsShowing(false);
    setChange(false);
    setEditID();
  };

  const removeAllHandler = () => {
    setArr([]);
  };

  const showHandler = () => {
    setIsShowing(!isShowing);
    setInputField('');
  };

  const cancelHandler = () => {
    setInputField('');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>TODO List</Text>
        <TextField
          textField={textField}
          setInputField={setInputField}
          showHandler={showHandler}
          isShowing={isShowing}
          cancelHandler={cancelHandler}
          changeItem={changeItem}
          saveHandler={saveHandler}
          changeHandler={changeHandler}
        />
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={arr}
          renderItem={({item}) => {
            return (
              <View style={styles.bottomContainer}>
                <ListLitem
                  value={item.value}
                  id={item.id}
                  deletebtn={deleteHandler}
                  editbtn={editHandler}
                  changeItem={changeItem}
                  editID={editID}
                  updateInput={updateInput}
                  setUpdateInput={setUpdateInput}
                  changeHandler={changeHandler}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width,
    height: Height,
    backgroundColor: '#808080',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  itemContainer: {
    position: 'relative',
    top: 100,
    right: 5,
    left: 15,
    width: Width - 30,
  },
});
