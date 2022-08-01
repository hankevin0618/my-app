import { useState } from "react";

const Home = () => {
    const [text, setText] = useState("")
    function onChange(e:any){
        setText(e.target.value)
    }
    function onSubmit(e:any){
        e.preventDefault();
        console.log(text)
    }

    return(
        <div>
            <h1>To Do</h1> 
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} />
                <button>Add2</button> 
            </form>
            <ul></ul>
        </div>
    )
}

export default Home;

