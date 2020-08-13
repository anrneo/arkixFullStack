import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'



export default class CreateNote extends Component {

    state = {
        title: '',
        content: '',
        imagen: '',
        pathfile: '',
        url: (window.location.hostname === 'localhost') ? 'http://localhost:4000' :'https://arkixfullstack.herokuapp.com/',
        date: new Date(),
        userSelected: '',
        users: [],
        list: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {

        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        }else{

            fetch(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25`)
        .then(res => res.json())
        .then(data => {
            console.log(data.hits);
          this.setState(
            {list: data.hits}
          );
          console.log(this.state.list);
          
        })

            if (this.props.match.params.id) {
                console.log(this.props.match.params.id)
                const res = await axios.get(this.state.url+'/api/notes/' + this.props.match.params.id, {
                    headers: {
                      Authorization: localStorage.getItem('token')
                    }
                   });
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
                imagen: this.state.imagen
            };
            await axios.put(this.state.url+'/api/notes/' + this.state._id, updatedNote, {
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
                imagen: this.state.imagen
            };
            axios.post(this.state.url+'/api/notes', newNote, {
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
                                 <select className="form-control"  onChange={this.onInputChange} name="imagen"
                                value={this.state.imagen}
                                required>
                                    <option>Selecciona la Imagen</option>
                                    {
                                        this.state.list.map(lis => (
                                            <option value={lis.previewURL} key={lis.id}> 
                                            {lis.previewURL}
                                            </option>
                                        ))
                                    }
                                    
                                </select>
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
