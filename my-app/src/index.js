import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Proc from "./process";
import AddNinja from "./body";
import "./index.css"


class App extends Component{
   state = {
       ninjas: [
           { name: "Brian", age: 33, belt: "Black", id:1},
           { name: "Matthew", age: 30, belt: "Green", id:2},
           { name: "James", age: 27, belt: "White", id:3},
           { name: "Mitchel", age: 23, belt: "Black", id:4},
           { name: "Alex", age: 19, belt: "Yellow", id:5}
        ]
   } 

   addNinja = (ninja) =>{
    // this.props.AddNinja(this.state)
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    this.setState({
        ninjas:ninjas
    })
   }

   delNinja = (id) =>{
       let ninjas = this.state.ninjas.filter(ninja =>{
           return ninja.id !== id
       })
       
       this.setState({
           ninjas: ninjas
       })
   }

    render(){
        return(
            <div className="cont">
                
                <Proc ninjas={this.state.ninjas} delNinja={this.delNinja}/>
                <AddNinja addNinja={this.addNinja} />
            </div>
        );
    }

}



ReactDOM.render(<App />, document.querySelector(".App"));
// serviceWorker.unregister();
