import React, {Component} from 'react';
import {CardBody, Label, CardTitle} from 'reactstrap';
import './Login.css'
import { loginUserFirebase } from '../../../config/redux/action';
import { connect } from 'react-redux';
import Button from '../../../component/atoms/button'


class Login extends Component {

    state = {
        email :'',
        password : ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }


  
    handleLoginSubmit = async () => {
        // console.log('email:', this.state.email)
        // console.log('password:', this.state.password)
        const {email, password} = this.state;
        const {history} = this.props;
        console.log('Data sebelum dikirim', email, password);
        const res = await this.props.loginUser({email, password}).catch(err => err);
        if(res){
            console.log("Login berhasil", res);
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email: '',
                password: ''
            })
            history.push('/dashboard')
        } else {
            console.log("Login Gagal")
        }
    }

    render(){
        return(
            <div className="container">
                <div className="col-12 col-md-6 offset-md-3">
                
                    <CardBody className="cardbody">
                    <CardTitle>Login</CardTitle>
                        <div className="inputs">
                            <Label>Email</Label>
                            <input className="input"  type="text" id="email" onChange={this.handleChangeText} value={this.state.email} />
                        </div>
                       
                        <div className="inputs">
                        <Label>Password</Label>
                        <input className="input"  type="password" id="password" onChange={this.handleChangeText} value={this.state.password}/>
                        </div>

                        <div className="row cardfooter">
                            <div className="col-12 col-md-9 info">
                                Belum punya akun ? Register
                            </div>
                            <div className="col-12 col-md-3 offset-md-9 btn">
                                {/* <button onClick={this.handleLoginSubmit}>Register</button> */}
                                <Button onClick ={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
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
    loginUser: (data) => dispatch(loginUserFirebase(data))
})

export default connect(reduxState, reduxDispatch) (Login);