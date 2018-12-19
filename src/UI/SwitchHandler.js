

const SwitchHandler = (switchItem) => {

  let switchHandle = null

  switch(switchItem){

    case ('listSwitchHandle'):
      switchHandle = 'listSwitchHandle'
    break
    default:
      switchHandle = null
  }

  return switchHandle

}

export default SwitchHandler