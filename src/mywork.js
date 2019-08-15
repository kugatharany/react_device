import React, { Component } from 'react';
import "./form.css";


class App extends Component {
    state = {
        textvalue: "",
        arraylist: []
    }
    onChange = (e) => {
        let textvalue = this.state.textvalue;
        textvalue = e.target.value;
        this.setState({ textvalue })
    }
    handleClick = () => {
        let textvalue = this.state.textvalue;
        let arraylist = this.state.arraylist;
        arraylist.push(textvalue)
        this.setState({ arraylist })
    }


    render() {

        return (

            <div>
                <input type="text" id="name" onChange={this.onChange} />
                <button id="search" value="Search" onClick={this.handleClick}>Add List</button>
                <br />
                <div id="display">

                    {this.state.arraylist.map((item, index) => {
                        return (
                            <p>{index + 1 + ") " + item}<br /></p>
                        )
                    })}
                </div>
            </div>

        )

    }
}
export default App;
