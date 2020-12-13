import {StyleSheet} from 'react-native';
 const ShareStyle = StyleSheet.create({
    BackItem:{
        margin:10,
        position:'absolute',
        zIndex:10
    },
     NavIconGrid:{
         position:'absolute',
         right:10,
         top:10,
         height:20,
         width:15,
         zIndex:10
     },
     CenterBottom:{
        flex:1,
         paddingRight: '12%',
         marginBottom:20
     },
     RightBottom:{
        flex: 2,
         paddingRight:'10%',
         marginBottom:20
     },
     LeftBottom:{
        flex:2,
         paddingLeft: '25%',
         marginBottom:20
     }
});
 export  default ShareStyle;

