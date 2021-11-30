import React, { Fragment, useState } from "react";

const InputResult = () => {

    const [result, setResult] = useState("")

     const onSubmitForm = async (e: any) => {
         e.preventDefault();
         try {
             const body = { result }
             const response = await fetch("http://localhost:5000/results", {
                 method: "POST",
                 headers: {"Content-Type": "application/json"},
                 body: JSON.stringify(body)
             });
             
             console.log(response)
         } catch (err: any) {
             console.error(err.message)
             
         }
     }

    return (
        <Fragment>
            <h1 className="text-center mt-10">
                Bumps Results
            </h1>
            <form className="d-flex mt-10" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={result} onChange={e => setResult(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}
export default InputResult