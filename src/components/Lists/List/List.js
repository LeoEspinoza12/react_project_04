

import React from 'react'
import Fragment from '../../../UI/Fragment'

const List = (props) => {

  return (
    <Fragment> 
        <div className = "col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title.slice(0, 20)}</h5>
              <p className="card-text">{props.body.slice(0, 125)}</p>
              <button 
                type="submit" 
                className="btn-sm btn-warning float-left"
                onClick={()=> props.switch('formSwitch', props.id)}>Edit</button>
              <button 
                type="submit" 
                className="btn-sm btn-danger pull-right">Delete</button>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default List
