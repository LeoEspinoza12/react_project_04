import React, { Component } from 'react'
import Fragment from '../../UI/Fragment'
import axios from 'axios'
import './Form.css'
class Form extends Component {


  

  render() {

    
    
    return (
      <Fragment>
        <div className='InputArea'>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter text" 
              onChange={()=>{}}
              value={this.props.datasamp.title}/>
          </div>
          <div className="form-group">
            <textarea 
              className="form-control"
              rows="4" 
              onChange={()=>{}}
              value={this.props.datasamp.body}></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Update Post</button>
        </div>


      </Fragment>
    )
  }
}


export default Form