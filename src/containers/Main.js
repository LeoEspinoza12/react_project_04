
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
      itemNumber: null,
      id: null,
      title: null,
      body: null
    }

  }

  // axios to get the data
  componentDidMount(){
    let sampleData = null
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        sampleData = response.data.splice(5, 3)
          this.setState({lists: sampleData})
        })
  }

  // listSwitch handler
  switchToggleHandler = (switchItem, itemNum) => {
    if(switchItem === 'listSwitchHandle'){
      this.setState(prevState => {
        return { btnSwitchHandle: !prevState.btnSwitchHandle,
                 formSwitch: false,
                 itemNumber: null,
                 id: null,
                 title: null,
                 body: null,
                 
        }
        })
    } else if (switchItem === 'formSwitch'){
        if(itemNum){
          axios.get('https://jsonplaceholder.typicode.com/posts/' + itemNum)
            .then(response => {
              this.setState({
                id: response.data.id,
                title: response.data.title,
                body: response.data.body
              })
            })
        }
    } 
  }

  // inputChangeHandler
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // axios delete data
  delete = (refNum) => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + refNum)
      .then(response => {
        if(response.status === 200){
          let newList = this.state.lists.filter((list)=>{
            return list.id !== refNum
          })
          this.setState({lists: newList})
        }
      })
  }



  render(){
    return(
      <div className='Main'>
        <section className='SectionOne'>
          <AuthContext.Provider
            value={{switch: this.state.btnSwitchHandle, 
            btnSwitch: this.switchToggleHandler}}>
              <Controls 
                change={this.onChangeHandler}
                id={this.state.id}
                title={this.state.title}
                body={this.state.body}/>
          </AuthContext.Provider>
        </section>
        <section className='SectionTwo'>
          <AuthContext.Provider
            value={{switch: this.state.btnSwitchHandle}}>
              <Lists
                lists={this.state.lists}
                switch={this.switchToggleHandler}
                delete={this.delete}/>
          </AuthContext.Provider>
        </section>
      </div>

    )
  }
}

export default Main