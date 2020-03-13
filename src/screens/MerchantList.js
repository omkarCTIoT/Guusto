import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import MerchantTab from '../components/MerchantTab';

class MerchantList extends Component {
    state = {
        merchantList: null,
        loading: true,
        selectedMerchant: null
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://165.227.43.115:8080/merchant/merchant')
            .then(response => response.json())
            .then(data => this.setState({ merchantList: data }, this.setState({ loading: false })))
            .catch(error => console.log(error));
    }

    renderMerchantTab(item) {
        console.log(item);
        return (
            <MerchantTab selectedMerchant={ this.state.selectedMerchant} selectMerchant={(merchant) => this.setState({selectedMerchant: merchant})} data={item} />
        )
    }
    render() {
        console.log(this.state.merchantList);
        return (
            <View style={styles.mainBoxStyle}>
                <View style={styles.homeBoxStyle}>
                    <TextInput
                        placeholderTextColor="grey"
                        autoCorrect={false}
                        style={styles.inputStyle}
                        placeholder={'   Search'} />

                    {this.state.loading ?
                        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}><ActivityIndicator style={{ marginTop: '25%' }} size="large" color="#6EC1B5" /></View> :
                        <FlatList
                            style={styles.listBoxStyle}
                            data={this.state.merchantList}
                            renderItem={(item) => this.renderMerchantTab(item)}
                            keyExtractor={(item, index) => index.toString()}
                        />}

                    <View style={styles.buttonBoxStyle}>
                        <Button
                            onPress={() => {this.props.cancel(), this.setState({selectedMerchant: null})}}
                            buttonStyle={{ borderColor: '#6EC1B5', backgroundColor: 'white', borderWidth: 2 }}
                            containerStyle={{ width: '100%' }}
                            title="Cancel"
                            type="outline"
                            large
                        />
                        <Button
                            onPress={() => {this.props.select(this.state.selectedMerchant)}}
                            buttonStyle={{ borderColor: 'grey', borderWidth: 2, backgroundColor: '#A0A0A0' }}
                            containerStyle={{ width: '100%' }}
                            title="Select"
                            large
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default MerchantList;

const styles = StyleSheet.create({

    mainBoxStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    listBoxStyle: {
        height: '100%',
        width: '100%',
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignItems: 'center',

    },
    buttonBoxStyle: {
        height: '15%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    homeBoxStyle: {
        height: '90%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputStyle: {
        width: '100%',
        fontSize: 18,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7
    }
});