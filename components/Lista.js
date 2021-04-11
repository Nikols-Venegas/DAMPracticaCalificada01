import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Image, Button, TouchableOpacity} from 'react-native';

function Item({title, image, resumen}) {
    return(
        <View style={styles.item}>
            <View style={styles.item1}>
                <View style={{paddingTop: 15}}>
                <Image source={{uri: image}} style={{height: 100, width: 100, borderRadius: 100, borderColor: "#807044", borderWidth: 4}} />
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text numberOfLines = {3} style={styles.resumen}>{resumen}</Text>
                </View>
                <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://images.vexels.com/media/users/3/223172/isolated/lists/3ac5f78af15d07f91488849e5b36ac0c-icono-de-flecha-hacia-adelante-plano.png',
                    }}
                />
            </View>
        </View>
    );
}

export default class lista extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount(){
        await fetch('http://192.168.115.2:3000/superheroes')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result);
                    this.setState({
                        items: result
                    });
                }, 
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
}
render( ){

    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.items.length > 0 ? this.state.items : [] }
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetallesHeroes', {itemObject: item})}>
                        <Item title={item.nombre} image={item.imagen} resumen={item.detalles}/>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id}
                />
        </View>

    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        flexDirection: 'column',
        backgroundColor: '#C3B791',
        marginHorizontal: 1,
        borderBottomWidth: 1,
        borderBottomColor:'black',
    },
    item1: {
        flexDirection:'row',
    },
    title: {
        flexDirection:'column',
        color: '#57481A',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    resumen: {
        paddingLeft:20,
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 10,
        textAlign:"justify",
        height: 80,
        width: 320,
        color: '#555450',
    },
    logo:{
        marginTop:40,
        marginLeft: 7,
        height: 50,
        width:50,
    }
});