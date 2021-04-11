import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

export default class detallesLista extends Component {
    render() {
        const {params} = this.props.route;
        return (
            <View style={styles.item}>
                <Image source={{uri: params.itemObject.imagen}} style={{height: 300, width: 300, borderColor: "#9D8135", borderWidth: 4}} />
                <Text style={styles.title}>{params.itemObject.nombre}</Text>
                <View>
                <Text style={styles.detalles}>{params.itemObject.detalles}</Text>
                </View>
            </View>
        );
      }
    }
const styles = StyleSheet.create({
        item: {
            paddingTop: 20,
            borderBottomColor:'black',
            alignItems:'center',
            alignContent: 'center',
            backgroundColor: '#C3B791',
            height: 858,
        },
        title: {
            flexDirection:'column',
            color: '#57481A',
            paddingTop: 10,
            paddingLeft: 10,
            fontSize: 45,
            fontWeight: 'bold',
        },
        detalles: {
            paddingLeft:10,
            paddingRight: 20,
            paddingLeft:20,
            paddingTop: 5,
            fontSize: 15,
            textAlign:"justify",
            color: '#555450',
        }
});