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
            To: '',
            From: '',
            Message: ''

        }
        this.handleMessageTo = this.handleMessageTo.bind(this);
        this.handleMessageFrom = this.handleMessageFrom.bind(this);
        this.handleMessageMessage = this.handleMessageMessage.bind(this);
    }

     handleMessageTo(e) {
        this.setState({ To: e.target.value });
      }
      handleMessageFrom(e) {
        this.setState({ From: e.target.value });
      }
      handleMessageMessage(e) {
        this.setState({ Message: e.target.value });
      }
      handleSubmitTo() {
        if (this.state.isFormFilledProfile) {
            const data = {
                To: this.state.To,
              };
              request
              .post('/api/greeting-card')
              .send(data)
              .set('Accept', 'application/json')
              .end((err, res) => {
                if (err || !res.ok) {
                  console.log('Oh no! err');
                } else {
                  console.log('Success');
                }
              });
          }
        }
        handleSubmitFrom() {
            if (this.state.isFormFilledProfile) {
                const data = {
                    From: this.state.From,
                  };
                  request
                  .post('/api/greeting-card')
                  .send(data)
                  .set('Accept', 'application/json')
                  .end((err, res) => {
                    if (err || !res.ok) {
                      console.log('Oh no! err');
                    } else {
                      console.log('Success');
                    }
                  });
              }
            }
            handleSubmitMessage() {
                if (this.state.isFormFilledProfile) {
                    const data = {
                        Message: this.state.Message,
                      };
                      request
                      .post('/api/greeting-card')
                      .send(data)
                      .set('Accept', 'application/json')
                      .end((err, res) => {
                        if (err || !res.ok) {
                          console.log('Oh no! err');
                        } else {
                          console.log('Success');
                        }
                      });
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
    addGreeting(){
        axios.post("http://localhost:3001/api/greeting-card/add")
        .catch((err) => {
            console.log(err)
          })
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
        <form onSubmit={this.handleSubmitMessage,this.handleSubmitFrom,this.handelSubmitTo}>
        <p class="input-field">
        <textarea name="add[to]" placeholder="To" value="></textarea>
        </p>
        <p class="input-field">
        <textarea name="add[from]" placeholder="From"></textarea>
        </p>
        <p class="input-field">
        <textarea name="add[message]" placeholder="Message"></textarea>
        </p>
        <p class="input-field">
        <input onClick={ this.addGreeting.bind()} type="submit" value="add-message"></input>
        </p>
        </form>
        </div>

        )
    }
}

export default Greeting

import React, { Component } from 'react';
import request from 'superagent';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }
  handleMessageInput(e) {
    this.setState({ message: e.target.value });
  }
  handleSubmitMessage() {
    console.log('starting to submit profile');
    if (this.state.isFormFilledProfile) {
      console.log('Profile Form appears filled');
      const data = {
        message: this.state.message,
      };

      request
        .post('/api/messages')
        .send(data)
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Oh no! err');
          } else {
            console.log('Success');
          }
        });
    }
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmitMessage}>
            <input
              onChange={this.handleMessageInput}
              value={this.state.message}
            />
            <button type='Submit' value='Submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default componentName;
