import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Slider } from 'react-native-elements';

class HomeScreen extends Component {
  state = {
    value: 10
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainBoxStyle}>
        <View style={styles.homeBoxStyle}>
          <Image
            style={{ width: '100%', height: '25%', resizeMode: 'cover' }}
            source={require('../assets/images/guustoCard.png')}
          />
          <View style={styles.detailBoxStyle}>
            <Text style={styles.headingStyle}>Select Merchant</Text>
            <Text style={styles.subHeadingStyle}>Recepient will choose any partner merchant</Text>
            <Button
              onPress={() => Actions.linksScreen()}
              buttonStyle={{ borderColor: '#6EC1B5', backgroundColor: 'white', borderWidth: 2 }}
              containerStyle={{ width: '100%' }}
              title="Select"
              type="outline"
              large
            />
            <View style={{ width: '100%', alignItems: 'stretch', justifyContent: 'center' }}>
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>Set Value</Text>
                <Text style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: '#6EC1B5'
                }}>${this.state.value}</Text>
              </View>
              <Slider
                minimumTrackTintColor={'#6EC1B5'}
                maximumTrackTintColor={'#6EC1B5'}
                thumbTintColor={'white'}
                thumbStyle={{ borderColor: '#6EC1B5', borderWidth: 1 }}
                trackStyle={{ color: '#6EC1B5' }}
                value={this.state.value}
                onValueChange={value => this.setState({ value })}
                minimumValue={2}
                maximumValue={12}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({

  mainBoxStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 244, 244, 1)'
  },
  headingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'black',
  },
  subHeadingStyle: {
    fontSize: 16,
    color: 'black',
  },
  homeBoxStyle: {
    height: '70%',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  detailBoxStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
});