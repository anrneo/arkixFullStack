import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class Login extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        //url: (window.location.hostname === 'localhost') ? 'http://localhost:4000' :'https://arkixfullstack.herokuapp.com',
        url: 'https://arkixfullstack.herokuapp.com',
        date: new Date(),
        userSelected: '',
        users: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(this.state.url+'/api/users/login', {
            email: this.state.email,
            password: this.state.password
        });
       if (res.data===false) {
           console.log('usuario no valido');
           if (localStorage.getItem('token') ) {
            localStorage.removeItem('token')
            localStorage.removeItem('login_id')
            localStorage.removeItem('email')
           }
    }else{
        console.log(res.data);
        localStorage.setItem('token', `${res.data.login[0].email} ${res.data.token}`)
        localStorage.setItem('login_id', `${res.data.login[0]._id}`)
        localStorage.setItem('email', `${res.data.login[0].email}`)
        window.location.href = '/notelist';
       }
        

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Inicair Sesión</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={this.onInputChange}
                                name="email"
                                value={this.state.email}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                onChange={this.onInputChange}
                                value={this.state.password}
                                required/>
                        </div>
                        
                        <button className="btn btn-primary">
                            Login <i className="material-icons">
                                send
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
