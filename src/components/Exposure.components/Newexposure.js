import React from 'react'  
import Form from "react-bootstrap/Form";  
// import Dropdown from 'react-bootstrap/Dropdown';    
    
    
function Newexposure() {    
  return (
<<<<<<< HEAD
    <div ><div>
      <h2> New Exposure</h2>
      <hr/>
    </div>
   
        <div className="row mb-2">
          <div className="col-3">
            <label>Loss Party</label>
          </div>
          <div className="col-6">
            <select className="w-100 form-control">
              <option>None</option>
              <option>Insured's loss</option>
              <option>Third party Liability </option>
              <option> </option>
            </select>
          </div>
=======
    <div>
      <div>
        <h1>Exposures</h1>
        <hr />
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Loss Party</label>
>>>>>>> e4073a352a44803b21b8dd11f03e1ce17204d40e
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>None</option>
            <option>Insured's loss</option>
            <option>Third party Liability </option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Primary Coverage</label>
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>None</option>
            <option>1:900 Madison street </option>
            <option> </option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Adjuster</label>
        </div>
        <div className="col-6">
          <input type="text" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Status</label>
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>Open</option>
            <option>Closed</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Creation Date</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input type="date" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Claimant</label>
        </div>
        <div className="col-6">
          <input type="text" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Claimant Type</label>
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>None</option>
            <option>Insured</option>
            <option>Member of insured's household </option>
            <option>Owner of the lost/Damaged property </option>
            <option>Customer </option>
            <option>Employee </option>
            <option>Other Third Party </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Primary Phone</label>
        </div>
        <div className="col-6">
          <input type="text" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Address</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input type="text" className="w-100 form-control" />
        </div>
      </div>
    </div>
  );    
}    
    
export default Newexposure