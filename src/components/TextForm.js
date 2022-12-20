import React, { useState } from 'react';



export default function TextForm(props) {

  const handleOnChange = (event) =>{
    console.log('handeling on changing')
    setText(event.target.value);

  }
  const uppercaseOnClick = () => {
    console.log('handling on clicking')
    let newValue = text.toUpperCase()
    setText(newValue)
    props.showAlert('Converted to uppercase', 'success')
  }
  const lowercaseOnClick = () => {
    console.log('handling on clicking')
    let newValue = text.toLowerCase()
    setText(newValue)
    props.showAlert('Converted to lowercase', 'success')
  }

  const [text, setText] = useState('');

  return (
   <>
    <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>

    <h2>Enter Text TO Analyze</h2>
    </div>
   <div className='container my-3'>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8"></textarea>
    <button type="button" className="btn btn-primary btn-lg mx-3 mt-3 " onClick={uppercaseOnClick}>UpperCase</button>
    <button type="button" className="btn btn-primary btn-lg mt-3" onClick={lowercaseOnClick}>Lowercase</button>
  </div>
   
   <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
    <h2>Summary</h2>
    <p>{text.length} characters and {text.split(" ").length} words <br/> {(text.split(" ").length/130).toFixed(3)} minutes read <br/> </p>
    <h2>Preview</h2>
    <p>{text}</p> 
    
   </div>
   
   </>
  )
}
