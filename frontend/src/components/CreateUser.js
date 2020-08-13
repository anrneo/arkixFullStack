import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        //url: (window.location.hostname === 'localhost') ? 'http://localhost:4000' :'https://arkixfullstack.herokuapp.com',
        url: 'https://arkixfullstack.herokuapp.com',
        users: []
    }

    async componentDidMount() {
        //this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get(this.state.url+'/api/users');
        this.setState({
            users: res.data
        });
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(this.state.url+'/api/users', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        });
        if(res.data===true){
            this.setState({ username: '',email: '', password: '' });
            window.location.href = '/';
        }else{
            console.log('email ya existe');
        }
        
    }

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete(this.state.url+'/api/users/' + userId);
            this.getUsers();
        }
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Registrar Usuario</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de usuario"
                                onChange={this.onInputChange}
                                name="username"
                                value={this.state.username}
                                required />
                        </div>
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
                            Registrar <i className="material-icons">
                                assignment
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
