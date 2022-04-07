import React, { useReducer } from "react";
import { View, Button, Text } from "react-native";
// import { reducer } from "redux-form";

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Example = (props) => {
  
  const [count, dispatch] = useReducer( reducer, initialState )

  return(
    <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#B4ECE3"}}>
      <Text style={{fontSize:28}}>React Native ~ useReducer</Text>
      <Text style={{fontSize:24}}>Count = {count}</Text>
      <Text>{'\n'}</Text>
      <Button color="#8479E1" title='Increment' onPress= {()=> dispatch('increment')} />
      <Text>{'\n'}</Text>
      <Button color="#CE49BF" title='Decrement' onPress= {()=> dispatch('decrement')} />
      <Text>{'\n'}</Text>
      <Button color="#E4AEC5" title='Reset' onPress= {()=> dispatch('reset')} />
    </View>
  );
}

export default Example;