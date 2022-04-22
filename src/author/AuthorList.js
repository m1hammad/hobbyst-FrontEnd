import React, { Component } from 'react'
import Author from './Author'

import Axios from 'axios'
import AuthorCreateForm from './AuthorCreateForm'
import AuthorEditForm from './AuthorEditForm'

export default class AuthorList extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           authors: [],
           isEdit: false,
           currentAuthor: ""
        }
      }
    
    componentDidMount(){
    this.loadAuthorList()
    }

    loadAuthorList = () => {
    Axios.get("author/index")
    .then(response => {
        console.log(response.data.authors)
        this.setState({
        authors: response.data.authors
        })
    })
    .catch(error => {
        console.log("Error fetching Authors")
        console.log(error)
    })
    }

    loadArticleList= (author) =>{
        console.log(author)
        if(author.article){
            const articles = author.article.map((article, key) => (
                    <td key={key}>
                        <li>{article.title}</li>
                    </td>
                )
            )
            return articles
        }
    }

    addAuthor = (author) => {
        Axios.post('author/add', author, {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
        console.log("Author added successfully")
        this.loadAuthorList()

        })
        .catch(error => console.log(error))
    }

    viewEditAuthor = (id) => {
        Axios.get(`/author/edit?id=${id}`,{
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log(response)
            console.log("loaded author info")
            console.log(response.data.author)
            var author = response.data.author
            this.setState( {
                isEdit: true,
                currentAuthor: author
            })
        })
        .catch(error => console.log("Error Loading Author Info", error))
    }

    editAuthor = (author) => {
        Axios.put('author/update', author,{
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log("Author updated")
            console.log(response)
            this.loadAuthorList()
        })
        .catch(error => console.log("Error Updating Author",error))
    }

    deleteAuthor = id => {
        Axios.delete(`author/delete?id=${id}`,{
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response =>{
            console.log("Deleted Author")
            this.loadAuthorList()
        })
        .catch(error => console.log("error deleting author", error))
    }

    render() {
        console.log(this.state)
        const allAuthors = this.state.authors.map((author, index) => 
            <tr key={index}>
            <Author {...author} editView={this.viewEditAuthor} deleteAuthor={this.deleteAuthor} ></Author>
            {this.loadArticleList(author)}
            </tr>
            )
        return (
        <div>
        <h1>AuthorList</h1>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                    </tr>
                    {allAuthors}
                </tbody>
            </table>
        </div>
        <div>
        {!this.state.isEdit ?
            <AuthorCreateForm addAuthor={this.addAuthor}></AuthorCreateForm>: 
            <AuthorEditForm key={this.state.currentAuthor._id} author={this.state.currentAuthor} editAuthor={this.editAuthor} ></AuthorEditForm>
        }
        </div>
        </div>
        )
    }
}
