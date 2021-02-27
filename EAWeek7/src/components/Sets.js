import React, {Component} from 'react'

class Sets extends Component {
   constructor(props) {
       super(props);
       this.state = {
           sets : 0
       };
   };

//Help Calulate Sets of Squats
render(){

    return(
        <div>
            <h2>Total Sets: {this.state.sets}</h2>
            <button onClick={() => this.setState({sets: this.state.sets + 1})}>Add a Set</button>
            <button onClick={() => this.setState({sets: 0})}>Reset</button>
        </div>
    );
  }
}


export default Sets;
