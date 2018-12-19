
import React, {Component} from 'react'
import axios from 'axios'
import Controls from '../components/Controls/Controls'
import Lists from '../components/Lists/Lists'
import './Main.css'

import AuthContext from '../UI/Auth-Context'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      lists: [],
      btnSwitchHandle: false,
      formSwitch: false,
      itemNumber: null
    }

  }

  // axios to get the data
  componentDidMount(){
    let sampleData = null
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          sampleData = response.data.splice(5, 3)
          this.setState({lists: sampleData})
          console.log(sampleData)
        })
  }

  // listSwitch handler
  switchToggleHandler = (switchItem, itemNum) => {
    if(switchItem === 'listSwitchHandle'){
      this.setState(prevState => {
        return { btnSwitchHandle: !prevState.btnSwitchHandle,
                 formSwitch: false,
                 itemNumber: null
        }
        })
    } else if (switchItem === 'formSwitch'){
      this.setState(prevState => {
        return { formSwitch: !prevState.formSwitch, itemNumber: itemNum }
      })
    } 
   
  }

  render(){
    
    return(
      <div className='Main'>
        <section className='SectionOne'>
          <AuthContext.Provider
            value={{switch: this.state.btnSwitchHandle, 
            btnSwitch: this.switchToggleHandler}}>
              <Controls 
                formSwitch={this.state.formSwitch}
                itemNumber={this.state.itemNumber}/>
          </AuthContext.Provider>
        </section>
        <section className='SectionTwo'>
          <AuthContext.Provider
            value={{switch: this.state.btnSwitchHandle}}>
              <Lists
                lists={this.state.lists}
                switch={this.switchToggleHandler}/>

          </AuthContext.Provider>
        </section>
      </div>

    )
  }
}

export default Main