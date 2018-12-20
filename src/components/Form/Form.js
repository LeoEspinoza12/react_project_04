import React, { Component } from 'react'
import Fragment from '../../UI/Fragment'
import axios from 'axios'
import './Form.css'
class Form extends Component {

  state ={
    success: false
  }

  submit = (id, title, body) =>{
    const data = {
          title: title,
          body: body
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => {
        if(response.status === 201){
          this.setState({success: true})
        }
      })
    // console.log(id, title, body)
  }


render() {
    let message = null
      if (this.state.success){
        message = <div className='InputArea'>
                    <h1>Your post is sent to the server!!!</h1>
                  </div>
      } else {
        message = <div className='InputArea'>
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        name='title' 
                        onChange={this.props.change}
                        value={this.props.title}/>
                    </div>
                    <div className="form-group">
                      <textarea 
                        className="form-control"
                        rows="4" 
                        name='body'
                        onChange={this.props.change}
                        value={this.props.body}></textarea>
                    </div>
                    
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={()=>{
                          this.submit(this.props.id, this.props.title, this.props.body)
                        }}>Update Post</button>
                  </div>
      }
  return (
      <Fragment>
        {message}
        
      </Fragment>
    )
  }
}


export default Form