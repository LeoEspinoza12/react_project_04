
import React from 'react'
import BtnControl from './BtnControl/BtnControl'
import Form from '../Form/Form'
// import axios from 'axios'
import './Controls.css'

const Controls = (props) => {
  let form = props.id ?
    <Form 
      id={props.id}
        title={props.title}
          body={props.body}
            change={props.change} /> : null
  return (
    <div className='Controls'>
      <div>
        <BtnControl />
      </div>
      {form}
     
    </div>
  )
}

export default Controls
