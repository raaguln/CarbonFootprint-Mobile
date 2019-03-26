import React, { Component } from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../img/cropped-me.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Raagul N</Text>
            </View>
          </View>
          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Karma</Text>
              <Text style={styles.count}>200</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Pool Count</Text>
              <Text style={styles.count}>45</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Rank</Text>
              <Text style={styles.count}>#2</Text>
            </View>
          </View>
          <Button 
            title="Start my ride!"
            style={styles.button}
            onPress={() => alert("Button Pressed!!")}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:320,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  button:{
    
  }
});