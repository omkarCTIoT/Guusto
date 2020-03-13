import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';


class MerchantTab extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        console.log(this.props.data);
        return (
            <View style={styles.mainContainerStyle}>
                <TouchableOpacity style={styles.tabBoxStyle}  onPress={() => console.log('text')}>
                    <View style={styles.imageBoxStyle}>
                        <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={{uri: this.props.data.item.image}}
                        />
                    </View>
                    <View style={styles.textBoxStyle}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.props.data.item.name}</Text>
                        <Text style={{ color: '#A0A0A0', fontSize: 16 }}>{this.props.data.item.shoppingOption}</Text>
                        <Text style={{ color: '#A0A0A0', fontSize: 16 }}>${this.props.data.item.minAmount} - ${this.props.data.item.maxAmount}</Text>
                        <Text style={{ fontWeight: 'bold', color: '#6EC1B5', fontSize: 16 }}>View Website</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MerchantTab;

const styles = StyleSheet.create({

    mainContainerStyle: {
        width: '95%',
        marginTop: '0.1%',
        height: '15%'
    },
    tabBoxStyle: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flex: 1
        // alignContent: 'center',
        // justifyContent: 'center'
    },
    imageBoxStyle: {
        width: '30%',
        height: '100%',
    },
    textBoxStyle: {
        marginLeft: '2%',
        width: '70%',
        height: '100%',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'space-around'
    }
})
