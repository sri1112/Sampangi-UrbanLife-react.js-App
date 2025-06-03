import React, { Component } from "react";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"click button1",
    }
    // this.submit = this.submit.bind(this)
  }

  submit() {
    // console.log("submited");
    alert("success..");
  }
  // arrow function
  submit1 = () => {
    alert("submited 1");
  };
  submit2(){
    alert("submit2");
  }
  submit3(event){
    alert("botton3"+event)
    console.log(event)
  }
  render() {
    return (
      <div>
        <button onClick={this.submit.bind(this)}>click button</button>
        <button onClick={this.submit1}>{this.state.title}</button><br/>
        <button onClick={() => this.submit2() }>click button2</button><br/>
        <button onClick={(e) => this.submit3(e)}>click button3    </button>


      </div>
    );
  }
}
