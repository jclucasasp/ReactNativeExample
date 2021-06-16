import { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

export class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

render(){
    return(
        <View style={StyleSheet.container}>
            <TextInput style={{height:30, borderColor: 'gray', borderWidth:1}} 
            placeholder="Write your name..." onChangeText={(name) => this.setState({name})}/>
        <Text style={{marginTop:10}}>Welcome to the CI/CD course, {this.state.name}</Text>
        </View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
