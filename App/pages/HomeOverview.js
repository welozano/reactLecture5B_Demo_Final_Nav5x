import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeOverview(props) {
  
    return (
      <View style={styles.container}>
      <Text>Home Screen Wil</Text>
      <Button
        title="Go to Details"
        onPress={()=> {
          //Navigate to the route sending params
          props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
            name: 'CoRE Details',
          });
        }
        } 
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
