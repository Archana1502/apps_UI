import React from "react";
import "..//App.css"
import { MdClose } from "react-icons/md";

const Fomtable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
    return (
        <div className="addContainer">
        <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleClose}><MdClose/></div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" onChange={handleOnChange} value={rest.course}/>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" onChange={handleOnChange} value={rest.age}/>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
}
export default Fomtable