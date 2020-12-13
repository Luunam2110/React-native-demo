import {StyleSheet,Dimensions} from 'react-native';

import{scale} from 'react-native-size-matters'

const style = StyleSheet.create({
    LogoFitHou:{
        width:scale(200),
        height:scale(300),
        resizeMode:'contain',
    },
    ContainerImage:{
        alignItems: 'center'
    },
    IconInput:{
        flex:1,
        position: 'relative',
        right:0,
        lineHeight:40,
        margin: 0,
        paddingLeft:20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius:20,
        backgroundColor:'#fff',
    },
    InputText:{
        backgroundColor:'#fff',
        flex: 9,
        borderBottomRightRadius:20,
        borderTopRightRadius:20
    },
    ContainerInput:{
        width:'70%',
        height: 40,
        flexDirection:'row',
        margin:5
    },
    ContainerForm:{
        width:Dimensions.get('window').width,
        alignItems: 'center'
    },
    ButtonLogin:{
        backgroundColor:'#3f48cc',
        width:250,
        height: 50,
        borderRadius:25,
        alignItems:'center'
    },
    ForgotPassword:{
        marginTop:10,
        marginBottom:20,
        padding:'2%',
    },
    OtherMethod:{
        alignItems:'center'
    },
    IconMethod:{
        flexDirection:'row',
        width:'40%',
        marginLeft:'30%'
    }
});

export default style;
