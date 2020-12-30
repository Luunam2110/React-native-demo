import React, {useRef,useState} from 'react';
import {
    SafeAreaView,
    Animated,
    TouchableOpacity,
    Image,
    View,
    Text,
    TextInput,
    Keyboard,
    StatusBar,
    Alert,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import{scale} from 'react-native-size-matters'
import style from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import connect from "react-redux/lib/connect/connect";

const LoginComponent =(props) => {
    console.log(props);
    const [Pass, setPass]= useState('');
    const [UserName, setUserName]=useState('');
    const fadeHeight = useRef(new Animated.Value(0)).current;
    const fadeWidth = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeWidth, {
            toValue: 1,
            duration: 200,
            useNativeDriver:false
        }).start();
        Animated.timing(fadeHeight, {
            toValue: 1,
            duration: 200,
            useNativeDriver:false
        }).start();

    };
    const fadeOut=()=>{
        Animated.timing(fadeWidth, {
            toValue: 0,
            duration: 200,
            useNativeDriver:false
        }).start();
        Animated.timing(fadeHeight, {
            toValue: 0,
            duration: 200,
            useNativeDriver:false
        }).start();
    }

    const updateHeight= fadeHeight.interpolate({
        inputRange:[0,1],
        outputRange:[scale(300),scale(180)],
        extrapolate:'clamp'
    });
    const updateWidth= fadeWidth.interpolate({
        inputRange:[0,1],
        outputRange:[scale(200),scale(120)],
        extrapolate:'clamp'
    })

    const Login =() =>{

        if (UserName == '')
            Alert.alert(
              "Tên khác rỗng",
              "Tên đăng nhập không được để trống",
              [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
        else {
            props.updateName(UserName);
            props.login();
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "paddingBottom"}
            style={{flex:1,flexDirection:'column'}}>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={{backgroundColor:'#e6e6e6',flex:1}}>

                <View style={style.ContainerImage}>
                        <Animated.Image
                            source={require('../../Resource/Img/LogoFitHou.png')}
                            style={[style.LogoFitHou,{height: updateHeight,width: updateWidth}]}
                        />
                    </View>
                <View style ={style.ContainerForm}>
                    <View style={style.ContainerInput}>
                        <FontAwesome style={style.IconInput} name="user"  size={20} color="#900" />
                        <TextInput
                          onBlur={fadeOut}
                          placeholder="Tên đăng nhập"
                          onFocus={fadeIn} style={style.InputText}
                          onChangeText={username=> setUserName(username)}
                          value={UserName}/>
                    </View>
                    <View style={style.ContainerInput}>
                        <Fontisto name="locked" style={style.IconInput}  size={20} color="#900" />
                        <TextInput
                          onBlur={fadeOut}
                          placeholder="Mật khẩu"
                          onFocus={fadeIn}
                          secureTextEntry={true}
                          onChangeText={pass => setPass(pass)}
                          value={Pass}
                          style={style.InputText}/>
                    </View>
                    <TouchableOpacity style={style.ForgotPassword} >
                        <Text style={{justifyContent:'flex-end',color: '#3f48cc'}}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={Login}
                        style={style.ButtonLogin}>
                        <Text style={{lineHeight:50, fontSize:17}}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={style.OtherMethod}>
                        <Text style={{padding:10}}>-Hoặc Truy cập-</Text>
                    </TouchableOpacity>
                    <View style={style.IconMethod}>
                        <MaterialCommunityIcons style ={{flex:1}} name="web" size={25} color="#66729e" />
                        <Entypo name="facebook" style ={{flex:1}} size={25} color="#66729e" />
                        <Entypo name="youtube" style ={{flex:1}} size={25} color="#66729e" />
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
const mapStateToProps = state => {
    return {
        name: state.ProfileReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () =>
          dispatch({
              type: 'LOG_IN'
          }),
        updateName :(name)=>dispatch({
            type: 'UPDATE_NAME',
            value:name
        }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent) ;
