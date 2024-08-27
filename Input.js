import { useState } from "react";

export default function Input({movieName,setMovieName}) {
    const [inputValue, setInputValue] = useState("");
    

    function inputHandler(e){
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)

        setInputValue(e.target.value)

    }

    function formSubmit(e){

        e.preventDefault(); // Using to prevent the page refresh
        setMovieName(inputValue);
       
    }

    return(
        <div className="search">

            <h1> {movieName} </h1>

            <form onSubmit={formSubmit}>

                <input onChange={inputHandler} value={inputValue} />

                <button type="submit"> Submit </button>
                
            </form>
        </div>
    )
}