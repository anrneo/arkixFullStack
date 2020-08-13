import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'



export default class NotesList extends Component {

    state = {
        notes: [], 
        url: (window.location.hostname === 'localhost') ? 'http://localhost:4000' :'https://arkixfullstack.herokuapp.com',
        user:''
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        if (localStorage.getItem('login_id')) {
            const id =  localStorage.getItem('login_id')
            const res = await axios.get(this.state.url+`/api/notes?id=${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            if (res.data===false) {
                window.location.href = '/';
             }else{
                 this.setState({
                     notes: res.data,
                     user : localStorage.getItem('email')
                 });
             }
        }else{
            window.location.href = '/';
        }
        
       
        
    }

    deleteNote = async (noteId) => {
        await axios.delete(this.state.url+'/api/notes/' + noteId, {
            headers: {
              Authorization: localStorage.getItem('token')
            }
           });
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <img className="card-img-top" src={note.imagen} alt="Card"></img>
                            <div className="card">
                                
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
                                    <Link to={"/edit/" + note._id} className="btn btn-secondary">
                                        <i className="material-icons">
                                            border_color</i>
                                    </Link>
                                </div>
                                <div className="card-body">
                                   
                                    
                                    <p>
                                        Contenido: {note.content}
                                    </p>
                                    <p>
                                        Author: {this.state.user}
                                    </p>
                                    <p>
                                        {format(note.createdAt)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
