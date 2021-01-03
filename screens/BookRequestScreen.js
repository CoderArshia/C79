import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName: '',
            reasonToRequest:'',
        }
    }

    createUniqueId(){
return Math.random().toString(40),substring(10)
    }
    addRequest=(bookName,reasonToRequest)=>{
        var userId=this.state.userId
        var randomRequestId=this.createUniqueId()
        db.collection('requested_books').add({
            "user_id":userId,
            "book_name":bookName,
            "reason_to_request":reasonToRequest,
            "request_id": randomRequestId,

        })

        this.setState({
            bookName:'',
            reasonToRequest:'',
        })
    }

    render(){
    return(
        <View style={{flex:1}}>
            <MyHeader title="request book"></MyHeader>
            <KeyboardAvoidingView style={styles.keyboardStyle}>
            <TextInput style={styles.formTextInput}
            placeholder={"enter book name "}
            onChangeText={(text)=>{
                this.setState({
                    bookName: text
                })
            }}
            >
                 value={this.state.bookName}
            </TextInput>

<TextInput style={styles.formTextInput,{height:300}}
multiline
numberOfLines={10}
            placeholder={"why do you need the book"}
            onChangeText={(text)=>{
                this.setState({
                    description: text
                })
            }}
            >
                value={this.state.description}
            </TextInput>

            <TouchableOpacity style={styles.button}
            onPress={()=>{

            }}>
        <Text>Request</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    )
}
    
}

const styles=StyleSheet.create({
formTextInput:{
width:"75%",
height:35,
alignSelf:'center',
justifyContent:'center',
borderRadius:10,
backgroundColor:"lightgreen",
borderWidth:2,
marginHeight: 20,
borderColor:"white",
marginTop:20,
padding:10,
},
button:{
width:"75%",
height:50,
alignSelf:'center',
justifyContent:'center',
borderRadius:10,
backgroundColor:"lightgreen",
}

})