import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, Dimensions,
} from 'react-native';

let ScreenWidth,Height,ScaleFactor;

const ImageItem = ({Url})  => {
    ScreenWidth= Dimensions.get('window').width/2-40;
    let source=  Image.resolveAssetSource(Url.UriImage);
    ScaleFactor=source.width/ScreenWidth;
    Height=source.height/ScaleFactor;
    return (
            <Image
                source={Url.UriImage}
                style={[styles.Image,{height:Height}]}
            />
    );
};

const styles = StyleSheet.create({
    Image: {
        width: Dimensions.get('window').width/2-40,
        borderRadius:15,
        margin:10
    },
});

export default ImageItem;
