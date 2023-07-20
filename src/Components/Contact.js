import React, { Component } from 'react'
import "./Contact.css"

export default class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      department : "",
      rating : "",
      data : []
      }
    }

    handleChange=(e)=>{
      this.setState({[e.target.name ]: e.target.value})
    }

    handleClick=()=>{
      const obj={
        name:this.state.name,
        department : this.state.department,
        rating : this.state.rating,
      }

      this.state.data.push(obj);

      this.setState({
        data : this.state.data,
        name : "",
        department : "",
        marks : "",
      })

      console.log(this.state.data)
    }

  render() {
    return (
      <>

      <h1 className='heading'>ADDMISSION FORM</h1>

      <div className='container1'>
        <ul type="none">

        <li><label>Name:</label>
        <input type="text" name="name" placeholder='Enter your name' value={this.state.name} onChange={this.handleChange}/> <br/>
        </li>

        <li><label>Department:</label>
        <input type="text" name="department" placeholder='Enter your department' value={this.state.department} onChange={this.handleChange}/><br/>
        </li>

        <li>
        <label>marks:</label>
        <input type="text" name="marks"
         placeholder='Enter your marks' value={this.state.marks} onChange={this.handleChange}/> <br/>
        </li>

        <li>
        <button onClick={this.handleClick} >Submit</button>
        </li>

        </ul>
        </div>

        <div className='container2'>

        {this.state.data.map((item)=>{
          return (
            <div className='container3'>
            <h5>Name : {item.name} |
                Department : {item.department} |
                Rating : {item.rating}
            </h5>
            </div>
          )
        })}
        </div>
      </>
    )
  }
}
