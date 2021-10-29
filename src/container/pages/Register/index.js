import React, {Component} from 'react';
import './Register.css';
import {CardBody, Label, CardTitle} from 'reactstrap';
import './Register.css'
import { registerUserFirebase } from '../../../config/redux/action';
import { connect } from 'react-redux';
import Button from '../../../component/atoms/button'


class Register extends Component {

    state = {
        email :'',
        password : ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = async () => {
        // console.log('email:', this.state.email)
        // console.log('password:', this.state.password)
        const {email, password} = this.state;
        console.log('Data sebelum dikirim', email, password);
        const res = await this.props.registerUser({email, password}).catch(err => err)
        if(res){
            this.setState({
                email : '',
                password : ''
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="col-12 col-md-6 offset-md-3">
                
                    <CardBody className="cardbody">
                    <CardTitle>Register</CardTitle>
                        <div className="inputs">
                            <Label>Email</Label>
                            <input className="input"  type="text" id="email" onChange={this.handleChangeText} value={this.state.email} />
                        </div>
                       
                        <div className="inputs">
                        <Label>Password</Label>
                        <input className="password"  type="password" id="password" onChange={this.handleChangeText} value={this.state.password}/>
                        </div>

                        <div className="row cardfooter">
                            {/* <div className="col-12 col-md-9 info">
                                Belum punya akun ? Register
                            </div> */}
                            <div className="col-12 col-md-3 offset-md-9 btn">
                                {/* <button onClick={this.handleRegisterSubmit}>Register</button> */}
                                <Button onClick ={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
                            </div>
                        </div>
                        
                    </CardBody>

                
            </div>
            </div>
        
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerUser: (data) => dispatch(registerUserFirebase(data))
})

export default connect(reduxState, reduxDispatch) (Register);