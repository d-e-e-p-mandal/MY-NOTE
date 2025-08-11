import { useState, useRef} from "react"


export default function Form() {
    const [name,setName] = useState("");

    const nameRef = useRef(""); // it will be nul

    const handleForm = (e)=> {
        const val = e.target.value;
        setName(()=>(val));
    }
    const handleReset = () => {
        setName("");
        nameRef.current.focus(); // it one of the uses of useRef
 
      }
    return (
        <>
            <div>
                <form action="" onReset={handleReset}>
                    <div> Name :
                        <input type="text" name="name" value={name} onChange={handleForm} ref={nameRef} placeholder="abcd"/>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                        <button type="reset">Reset</button>
                    </div>
                    <div>
                        <h2> My Name is : {name}</h2>
                    </div>
                </form>
            </div>
        </>
    )
}