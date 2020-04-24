import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DetailButtons(params) {

  //Get params
  const{itemId} = params.route.params;
  const{otherParam} = params.route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen Wil</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Try to go to Details with navigate"
        onPress={()=> params.navigation.navigate('Details')} 
      />
      <Button
        title="Go to Details again with push"
        onPress={()=> {
          params.navigation.push('Details',{
            itemId: Math.floor(Math.random()*100),
          });
        }} 
      />
      <Button
        title="Go to Home"
        onPress={()=> params.navigation.navigate('Home')} 
      />
      <Button
        title="Go Back"
        onPress={()=> params.navigation.goBack()} 
      />
      <Button
        title="Go to the first screen in the stack"
        onPress={()=> params.navigation.popToTop()} 
      />
      <Button
        title="Change the title"
        onPress={() => params.navigation.setOptions({ title: 'CoRe Updated!' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
