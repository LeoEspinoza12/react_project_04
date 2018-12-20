
import React, { Component } from 'react'
import AuthContext from '../../UI/Auth-Context'
import List from './List/List'
import './Lists.css'

class Lists extends Component {
    static contextType = AuthContext
  render() {
    let list = null
    if(this.context.switch){
      if(this.props.lists.length > 0){
        list =  <div className='Lists'>
                  <div className="row Rows">
                    {this.props.lists.map((list) => {
                      return <List 
                              key={list.id}
                              title={list.title}
                              body={list.body}
                              id={list.id}
                              switch={this.props.switch}
                              delete={this.props.delete} />
                    })}
                  </div>
                </div>
      } else {
        list = <div className='Lists'>
                  <div className="row Rows">
                    <h1>All lists from the server are deleted</h1>
                  </div>
                </div>
      }
    }
    return list
  }
}


export default Lists