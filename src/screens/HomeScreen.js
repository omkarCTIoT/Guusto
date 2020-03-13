import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Slider } from 'react-native-elements';
import MerchantList from './MerchantList';

class HomeScreen extends Component {
  state = {
    value: 5,
    showMerchantList: false,
    currentMerchant: null
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
            {this.state.currentMerchant !== null ? <Image
              style={{ width: '50%', height: '50%', resizeMode: 'contain' }}
              source={{ uri: this.state.currentMerchant.item.image }}
            /> : <Text style={styles.subHeadingStyle}>Recepient will choose any partner merchant</Text>}
            <Button
              onPress={() => this.setState({ showMerchantList: true })}
              buttonStyle={{ borderColor: '#6EC1B5', backgroundColor: 'white', borderWidth: 2 }}
              containerStyle={{ width: '100%' }}
              title="Select"
              type="outline"
              large
            />

            {this.state.currentMerchant !== null ? <View style={{ width: '100%', alignItems: 'stretch', justifyContent: 'center' }}>
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
                onValueChange={v => this.setState({  value:Math.round(v)})}
                minimumValue={this.state.currentMerchant.item.minAmount}
                maximumValue={this.state.currentMerchant.item.maxAmount}
              />
            </View> : null}
          </View>

        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showMerchantList}
        >
          <MerchantList
            select={(item) => this.setState({ currentMerchant: item , value: 5, showMerchantList: false})}
            cancel={() => this.setState({ showMerchantList: false, currentMerchant: null })}
          />
        </Modal>
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