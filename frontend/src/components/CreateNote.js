import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { uploadFile } from 'react-s3';

const config = {
    bucketName: 'testnew123',
    //dirName: 'testing/test1/', /* optional */
    region: 'us-east-1',
    accessKeyId: 'AKIAIDGLPACSWDKQYI2Q',
    secretAccessKey: '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',
}

export default class CreateNote extends Component {

    state = {
        title: '',
        content: '',
        imagen: '',
        pathfile: '',
        date: new Date(),
        userSelected: '',
        users: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {

        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        }else{
            if (this.props.match.params.id) {
                console.log(this.props.match.params.id)
                const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id, {
                    headers: {
                      Authorization: localStorage.getItem('token')
                    }
                   });
                console.log(res.data)
                this.setState({
                    title: res.data.title,
                    content: res.data.content,
                    date: new Date(res.data.date),
                    userSelected: res.data.author,
                    _id: res.data._id,
                    editing: true
                });
            }
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title,
                content: this.state.content,
                author: localStorage.getItem('login_id'),
                date: this.state.date,
                imagen: this.state.pathfile
            };
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, updatedNote, {
                headers: {
                  Authorization: localStorage.getItem('token')
                }
               });
        } else {
            const newNote = {
                title: this.state.title,
                content: this.state.content,
                author: localStorage.getItem('login_id'),
                date: this.state.date,
                imagen: this.state.pathfile
            };
            axios.post('http://localhost:4000/api/notes', newNote, {
                headers: {
                  Authorization: localStorage.getItem('token')
                }
               });
        }
        window.location.href = '/notelist';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onImageChange = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
       const file = await uploadFile(e.target.files[0], config)
       this.setState({
        pathfile: file.location
        })
    
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear un Post</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Titulo"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Contenido"
                                name="content"
                                onChange={this.onInputChange}
                                value={this.state.content}
                                required>
                            </textarea>
                        </div>

                         {/* Note Date */}
                         <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                          {/* Note Imagen */}
                          <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Imagen"
                                onChange={this.onImageChange}
                                name="imagen"
                                value={this.state.imagen}
                                required />
                        </div>
                        <button className="btn btn-primary">
                            Save <i className="material-icons">
                                assignment
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
