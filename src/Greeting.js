import React, { Component } from 'react'
import {
    Link,
    Route
  } from 'react-router-dom'
import axios from 'axios'

class Greeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            greetingsTo: [],
            greetingsFrom: [],
            greetingsMessage: [],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/api/greeting-card")
        .then((res)=>{
            console.log(res.data)
            this.setState({
    
                greetingsTo: res.data.to,
                greetingsFrom: res.data.from,
                greetingsMessage: res.data.message
        })
    }).catch((err)=>{
            console.log(err)
        })
}
    deleteGreeting(){
        var  input1 = document.querySelector('#one').value
        var input2 = document.querySelector('#two').value
        var input3 = document.querySelector('#three').value

        axios({
            method: 'delete',
            url: 'http://localhost:3001/api/greeting-card',
            params: {
            to: input1,
            from: input2,
            message: input3},
            config: { headers: {'Content-Type': 'multipart/form-data' }}

            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    addGreeting(){
        var  input1 = document.querySelector('#one').value
        var input2 = document.querySelector('#two').value
        var input3 = document.querySelector('#three').value
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/greeting-card',
            data: {
            to: input1,
            from: input2,
            message: input3},
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
   
    render(){
        var greetingsTo = this.state.greetingsTo
        var greetingsFrom = this.state.greetingsFrom
        var greetingsMessage = this.state.greetingsMessage

        return(
        <div>
            <h1>My Greetings</h1>
            <ul>
            <li>To: { greetingsTo }</li>
            <li>From: {greetingsFrom }</li>
            <li> Message: {greetingsMessage}</li>
            </ul>
        <form>
            <ul>
       <li><input id="one" type="text"></input></li>
       <li><input id="two" type="text"></input></li>
        <li><input id="three" type="text"></input></li>
       <li><input onClick={this.addGreeting.bind(this)} type="submit" value="add-message"></input></li>
       <li><input onClick={this.deleteGreeting.bind(this)} type="submit" value="Delete Message"></input></li>
            </ul>
        </form>
        <form>

        </form>
        </div>

        )
    }
}

export default Greeting
