import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default class CheckNearby extends Component {

    state = {
      placeName: "",
      destinationName: ""
    };
    
    placeNameChangedHandler = val => {
      this.setState({
        placeName: val
      }); 
    };

    destinationNameChangedHandler = val => {
      this.setState({
        destinationName: val
      }); 
    };

    render() {
      return (
    <View>
      <Text>{"Enter your location"}</Text>
      <TextInput 
        placeholder="Anna Nagar Depot"
        style={styles.textInput}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler} 
      />
      
      <Text>{"Enter your Destination"}</Text>
      <TextInput 
        placeholder="Koyambedu"
        style={styles.textInput}
        value={this.state.destinationName}
        onChangeText={this.destinationNameChangedHandler} 
      />

      <Button 
        title="Search for Nearby Rides"
        onPress={() => this.props.onPlaceAdded(this.state.placeName, this.state.destinationName)}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 300, 
    borderColor:"black", 
    borderWidth:1
  },
});

