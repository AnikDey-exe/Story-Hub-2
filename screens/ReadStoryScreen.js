import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Header1 from "./Header";
import firebase from 'firebase';
import db from '../config';

export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyContent: ''
        }
    }

    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}> 
                <Header1/>
               <Text style={{alignText: 'center', marginTop: 200}}> Read Story </Text> 
            </View>
        )
    }    
}