import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CheckNearby from './src/components/CheckNearby';
import Profile from './src/components/Profile';
//import MapPage from './src/components/MapPage'

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = (placeName, destinationName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat([placeName, destinationName])
      }
    })
  };

  render() {
    //Returns the places as JSX elements
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));

    return (
      // <View style={styles.container}>
      //   <CheckNearby
      //     onPlaceAdded={this.placeAddedHandler}
      //   />
      //   <View>{placesOutput}</View>
      // </View>
      <Profile/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
