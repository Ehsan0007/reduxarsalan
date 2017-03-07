import React, { Component } from 'react';

class Signup extends Component{
    constructor(props){
        super(props)
        this.Submit = this.Submit.bind(this)
    }
    Submit(ev){
        ev.preventDefault()
        var email = this.refs.email.value
        this.props.login(email)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.Submit}>
                    <input type="text" ref="email" />
                </form>
                
                
            </div>
        )
    }
}
export default Signup