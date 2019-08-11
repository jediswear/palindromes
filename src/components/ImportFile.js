import React from 'react'
import {connect} from 'react-redux'
import {setFileContent, setFileInfo} from '../actions/file.action'

const ImportFile = ({setFileContent, setFileInfo}) => {
  const importHandler = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    if(!file){
      return
    }

    reader.readAsText(file)
    reader.onload = function () {
      setFileContent(this.result)
    }

    setFileInfo(file.name)
  }

  return (
      <label className='btn nav-import'>
        <input
          className='nav-import__input'
          type='file'
          onChange={importHandler}/>
        import
        <i className="material-icons">publish</i>
      </label>
  )
}

const mapDispatchToProps = {
  setFileContent,
  setFileInfo
}


export default connect(null, mapDispatchToProps)(ImportFile)