import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:''

         };
    }
    
    inputChange =()=>{
        let val=this.refs.username.value;

        this.setState({
            username:val
        })
    }
    getInput=()=>{

        alert(this.state.username);
    }
    render() {
        return (
            <div>

              <input ref="username" onChange={this.inputChange}/> <button onClick={this.getInput}>获取input的值</button>
            </div>
        );
    }
}

export default List;