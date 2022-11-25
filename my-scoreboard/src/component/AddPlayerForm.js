import React, { useState } from "react";


const AddPlayerForm =()=>{
    const [value, setValue] = useState("");
 
    const handleSubmit  = (e) => {
        e.preventDefault();
        props.addPlayer(value);
    }
return(

    <form onSubmit={(e) => handleSubmit(e)}>
    { console.log(value) }
       <input 
            type='text'
            value={value}
            placeholder="enter a player's name" 
            onChange={(e) => setValue(e.target.value)}
        />

       <input 
            type='submit'
            value="add player"
            ref={input=>this.props.newItem = input}
        />


    </form>




);
}



export default AddPlayerForm;