import React from 'react';
import  {scale, verticalScale } from 'react-native-size-matters';
import { Text,View, StyleSheet,SafeAreaView,ScrollView,Image,Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShareStyle from '../ShareStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Eiffel: () => React$Node = () => {
    return (
        <View style={{flex:1,height: Dimensions.get('window').height}}>
            <View>
                <MaterialIcons style={[ShareStyle.BackItem]} size={25} name="arrow-back" color="#66729e" />
                <Fontisto style={ShareStyle.NavIconGrid} size={25} name="nav-icon-grid-a" color="#66729e" />
            </View>
            <Image
                style ={styles.image}
                source = {require('../Img/anh5.jpg')}/>
                <View>
                    <View>
                        <Text style={styles.text}>Eiffel tower</Text>
                        <View>
                            <FontAwesome name="map-marker" size={30} color="#900" />
                            <Text>Paris,Franch</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialIcons name="cloud-download" size={30} color="#900" />
                    </View>
                </View>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ullamcorper sapien.
            </Text>
            <View>
                <Text>#Photograhpy</Text>
                <Text>#sea</Text>
            </View>
            <View>
                <FontAwesome name="heart" size={30} color="#900" />
                <Ionicons name="chatbox" size={30} color="#900" />
                <FontAwesome name="bookmark" size={30} color="#900" />
            </View>
            <View style={{flexDirection:'row',position:'relative'}}>
                <Feather name="align-justify" style={ShareStyle.LeftBottom} size={25} color="#66729e" />
                <Entypo name="circle-with-plus" style={ShareStyle.CenterBottom} size={25} color="#66729e" />
                <Feather name="user" style={ShareStyle.RightBottom} size={25} color="#66729e" />
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    image:{
        width:Dimensions.get('window').width,
        height:scale(300),
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    text:{
        fontSize:20
    }
})

export default Eiffel;
