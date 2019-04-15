import React, { Component } from 'react';
import Button from './Button'
import './Login.css'
import { connect } from 'react-redux'
import {logIn} from '../actions' 
import { Redirect } from 'react-router'

class Login extends Component {
    state={
        name:'',
        pwd:''
    }

    buttonstyle={
        color:'blue',
        fontsize: '16px'
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    handleSubmit=()=>{
        this.props.logIn(this.state)
    }


    render() {
        if(this.props.users.name && this.props.users.pwd){
            return <Redirect to='/users' />
        }else{
            return (
                <div>
                    <div style={{color:'red'}}>{this.props.users.msg}</div>
                    <div className='flex-container'>
                        Username:<input type='text'
                                        onChange={e=>this.handleChange('name',e.target.value)}
                                        value={this.state.name} />
                        Password:<input type='password' 
                                        onChange={e=>this.handleChange('pwd',e.target.value)}
                                        value={this.state.pwd} />
                    </div>
                        {
                            this.state.name.length>0 || this.state.pwd.length > 0?  
                            <Button 
                                onSubmit = {this.handleSubmit}
                                theme={this.buttonstyle}>submit</Button> : <Button disabled>submit</Button>
                        }
                </div>
            )
        }

    }
}

const mapStateToProps = state =>{
    return{ users: state.users}
}

export default connect(mapStateToProps,{logIn})(Login);