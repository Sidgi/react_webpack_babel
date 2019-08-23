import React, { useState, useEffect } from  'react'

function Form(props){
    const [dateee,setDateee] = useState((new Date()).toLocaleTimeString())
    const h1Text = 'Form of my page';
    function getTime(){
        setInterval(function(){ setDateee((new Date()).toLocaleTimeString())},1000)
        return dateee;
    }
    return(
        <div>
            <h1>Current time is: <span>{dateee}</span></h1>
            <h1>Please enter URL:</h1>
            {h1Text}
            <form>
                <input type='text' name='firstName' placeholder='url' defaultValue='https://www.'/>
                <input onClick={()=>getTime()} type='button' name='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default Form;