
import React, {Component} from 'react'
import BtnControl from './BtnControl/BtnControl'
import Form from '../Form/Form'
import axios from 'axios'
import './Controls.css'

class Controls extends Component {

state = { 
  itemSelected: {}
}

componentDidUpdate(){
  if(this.props.itemNumber){
    if(!this.state.itemSelected || this.state.itemSelected.id  !== this.props.itemNumber){
      axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.itemNumber)
        .then(response => {
          this.setState({itemSelected: response.data})
        })
    }
  }
}


render(){
  
  let form = this.props.itemNumber ? <Form 
                                        datasamp={this.state.itemSelected}
                                        itemNumber={this.props.itemNumber}/> : null
  
  return (
    <div className='Controls'>
      <div>
        <BtnControl />
      </div>
      {form}
     
    </div>
    )
  }
}

export default Controls
