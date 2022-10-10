import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("The button is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("The button is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleDelClick = () => {
        setText('');
    }

    const handleCopyClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //setText("Enter the fucking text here.....");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>

        <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" id='myBox' value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Submit UpperCase</button>
        <button className="btn btn-primary m-3" onClick={handleLoClick}>Submit LowerCase</button>
        <button className="btn btn-danger m-3" onClick={handleDelClick}>Clear</button>
        <button className="btn btn-success m-3" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container">
        <h2>For Results</h2>
        <p>There are {text.length} characters in the above field</p>
        <p>There are {text.split(" ").length} Words in the above field</p>
        <p>IT will Take {0.008 * text.split(" ").length} Minutes to read the above data in the input field...</p>
        <h3>Preview:</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
