import React from 'react';
import './Form.css';
import image from './image/ftsoft.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const axios = require('axios');

function Input(props) {
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return ( 
        <div style={{marginBottom: "30px"}}>
            <TextField   
                label={props.name}
                type={props.type}
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={handleChange}
            />
        </div>
    )
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailLength: 0,
            passwordLength: 0,
            isLogin: false
        }
    }

    render() {
        // if(this.state.isLogin) {
        //     return(
        //         <Redirect to={'/login'}></Redirect>
        //     )
        // }
        return (
            <div className='container'>
                <div>
                    <img src={image} className='image-icon' alt="ft-soft"></img>
                </div>
                <Input name="Email" type="email" onChange={this.handleChangeInputsEmail}></Input>
                <Input name="Пароль" type='password' onChange={this.handleChangeInputsPassword}></Input> 
                <div> 
                    <Button variant="contained" 
                            color={'secondary'} 
                            disabled={ this.state.emailLength && this.state.passwordLength ?
                            false : true }
                            onClick={this.handleClick}>
                        ВОЙТИ
                    </Button>  
                </div>
                <a href='http://ft-soft.com/home' 
                   target="_blank"
                   rel="noopener noreferrer"
                > НЛО улетело на сайт <span>&#128123;</span> </a>
            </div>
        )
    }
    
    handleClick = () => {
        axios.post('http://212.104.72.184/api/Account/Login', {
            "email" : this.state.email,
            "password" : this.state.password
        })
        .then((response) => {
            if(response.status === 200) {
              this.setState({
                  isLogin: true
              })
              console.log(response)
            }    
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('http://212.104.72.184/api/Account/GetInfo', {
            "id": 0,
            "email": "string",
            "firstName": "string",
            "lastName": "string"
          })
        .then((response) => console.log(response));
    }
    
    handleChangeInputsEmail = (value) => {
        this.setState({
            email: value,
            emailLength: value.length
        })
    }
    handleChangeInputsPassword = (value) => {
        this.setState({
            password: value,
            passwordLength: value.length
        })
    }
}

export default Form;