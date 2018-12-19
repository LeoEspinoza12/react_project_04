
import React from 'react'
import AuthContext from '../../../UI/Auth-Context'


const BtnControl = (props) =>  (


  <AuthContext.Consumer>
    {switchcontext => {
      return (
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={()=>switchcontext.btnSwitch('listSwitchHandle')}>
            {switchcontext.switch ? 'Clear All Lists' : 'Show All List'}</button>   
      )
    }}
  </AuthContext.Consumer>
)

export default BtnControl