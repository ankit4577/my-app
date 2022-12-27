import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCLick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase !!", "success")
    }
    const handleLoCLick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase !!", "success")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed !!", "success")
    }
    const [text,setText] = useState ('');
  return (
      <>
          <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
              <h1>{props.heading}</h1>
              <div className="mb-3">
                  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', 
                    color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
              </div>
              <button className="btn btn-primary mx-2" onClick={handleUpCLick}>Convert to Upper case</button>
              <button className="btn btn-primary mx-2" onClick={handleLoCLick}>Convert to Lower case</button>
              <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length - 1} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
          </div>
      </>
  )
}
