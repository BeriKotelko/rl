import React, { Fragment, useState, useEffect } from "react";
import EditResult from "./EditResult"

interface Result {
  result_id: number;
  result: string;
}

const ListResults = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [showModal, setShowModal] = useState(false)

  //delete function
    const deleteResult = async (id: number) => {
        try {
           const deleteResult = await fetch(`http://localhost:5000/results/${id}`, { method: "DELETE"})
            setResults(results.filter(result => result.result_id !== id))
        } catch (err: any) {
            console.error(err.message)
        }
    }

  const getResults = async () => {
    try {
      const response = await fetch("http://localhost:5000/results");
      const jsonData = await response.json();
      setResults(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getResults();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-10">
        <thead>
          <tr>
            <th>Result</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*  <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {results.map((oneResult) => (
            <tr key={oneResult.result_id}>
              <td>{oneResult.result}</td>
              <td><EditResult result={oneResult} /></td>
              {/* <td>
                <button
                  className="btn btn-danger"
                  onClick={() => setShowModal(true)}
                >
                  Edit
                </button>
              </td> */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteResult(oneResult.result_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {showModal && <EditResult result={results[0]}/>} */}
    </Fragment>
  );
};

export default ListResults;
