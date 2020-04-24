import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default class ParamsFunction extends React.Component {

   website =() => {
     WebBrowser.openBrowserAsync('https://reactnavigation.org/');
   }

   componentDidMount() {
     //Set the title and header after Mount
    this.props.navigation.setOptions({ 
      headerTitle: 'Head Params Functions',
      headerLeft: () =>(
        <Feather style={{marginLeft: 15}}
         name="menu"
         size={30}
         color={'#1E90FF'}
         onPress={()=> this.props.navigation.toggleDrawer()}
       />
      ),
      headerRight: () => (
        <Feather style={{marginRight: 15}}
          name="save"
          size={30}
          color={'#1E90FF'}
          onPress={this.website}
        />
      ),  
    });
   }


  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Navigate"
        onPress={() => this.props.navigation.navigate('DrawerFunctions')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
