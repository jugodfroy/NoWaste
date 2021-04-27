import React from 'react'
import  {View , Image, Text, StyleSheet, TouchableOpacity, Alert, Dimensions  } from 'react-native' 
import { useNavigation  } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

function Dish(props) {
    const navigation = useNavigation(); 

    return (
        <TouchableOpacity onPress={() => navigation.navigate('DishDetails', ({screenName:props.dish.name, dish:props.dish}))}>
            <View style={style.container}>
                <Image style={style.img} source={{uri: props.dish.picture}}/>
                <View style={style.title_box}>
                    <Text style={[style.title, { fontWeight: 'bold' }]}>{props.dish.name}</Text>
                    <Text style={style.price}>{props.dish.price} Tokens </Text>
                </View>
                <Text style={style.details} numberOfLines={2}>{props.dish.description}</Text>
                <Text style={[style.details, { color: '#2980B9' }]}>360m de votre position </Text>
            </View>
        </TouchableOpacity>
    )

}


const style=StyleSheet.create({
    container:{

        //marginTop : 15, //juste dev, à retirer
        borderWidth : 3,
        borderRadius : 40,
        backgroundColor : '#FFF',
        borderColor : '#FFF',    //gris '#ecf0f1'
        //marginHorizontal : 10,
        paddingTop : 10,
        paddingBottom : 10,
        //maxWidth:350,
        width : (Dimensions.get('window').width)*1,
        alignSelf : 'center',
        //minHeight : 250,
        maxHeight : 250
        
    },
    
    img:{
        height : 150,
        width : 330,
        alignSelf :'center',
        borderRadius : 30,
    },

    title_box:{
        flexDirection:'row',
        justifyContent : 'space-between',
        paddingHorizontal : 10,

        
        
    },

    title:{
        fontWeight :'bold',
        fontSize:20,
    },

    price:{
        fontSize:20,
        color : "#E67E22",
        fontWeight : 'bold',
    },


    details:{
        marginHorizontal : 8,
    }


})



export default Dish

