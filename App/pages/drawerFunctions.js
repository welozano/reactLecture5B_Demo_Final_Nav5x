import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DrawerFunctions extends React.Component {

  componentDidMount() {
    //Set the title after Mount
    this.props.navigation.setOptions({ title: 'Drawer Functions CoRE'});
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Open"
        onPress={() => this.props.navigation.openDrawer()}
      />
      <Button
        title="Close"
        onPress={() => this.props.navigation.closeDrawer()}
      />
      <Button
        title="Buttons"
        onPress={() => this.props.navigation.toggleDrawer()}
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
