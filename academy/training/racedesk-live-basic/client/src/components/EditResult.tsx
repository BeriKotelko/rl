import React, { Fragment, FC, useState } from "react";
import { resourceLimits } from "worker_threads";

// interface Result {
//     result_id: number;
//     result: string;
//   }

const EditResult: FC<{ result: any }> = ({ result })=> {
    const [editResult, setEditResult] = useState(result.result)
    return ( <Fragment>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
    
          
          <div className="modal-header">
            <h4 className="modal-title">Edit Result {result}</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
    
    
         
          <div className="modal-body">
            <input type="text" className="form-control" value={result.result} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
          </div>
    
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
          </div>
    
        </div>
      </div>
    </div></Fragment> )
}
export default EditResult