import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Proc from "./process";

class App extends Component{
    state = {
        ninjas: [
            { name: "Zaac", age: 26, belt: "Black", id: 1 },
            { name: "Bennat", age: 35, belt: "Green", id: 2 },
            { name: "Lukic", age: 20, belt: "Black", id: 3 },
            { name: "Brian", age: 28, belt: "White", id: 4 },
            { name: "James", age: 24, belt: "Yellow", id: 5 }
        ]
    }
    
    render(){
        return(
            <div className="container">
                <Proc ninjas={this.state.ninjas}/>
            </div>
        );

    }

}


ReactDOM.render(<App />, document.querySelector(".application"));
// serviceWorker.unregister();
