function FnolDetails(){
  return(<div>
      

 <div className='row mb-2'>
   <div className='col-4'>
     <label>Claim Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-5'>
     <input className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label> Date Of Loss</label>
     
   </div>
   <div className='col-5'>
     <input type="date" className='w-100 form-control' />
   </div>
 </div>
 
 <div className='row mb-2'>
   <div className='col-4'>
     <label>Loss Location</label>
   </div>
   <div className='col-5'>
     <input className='w-100 form-control' />
   </div>
 </div>
<div className='row mb-2'>
   <div className='col-4'>
     <label>Time Of Loss</label>
  
   </div>
   <div className='col-5'>
     <input type="time" className='w-100 form-control' />
   </div>
 </div>
<div className='row mb-2'>
   <div className='col-4'>
     <label>Reported By</label>
     
   </div>
   <div className='col-5'>
     <input className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label> Date Reported</label>
     
   </div>
   <div className='col-5'>
     <input type="date" className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label>Policy Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-5'>
     <input className='w-100 form-control' />
   </div>
 </div>
  
  <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/> &nbsp; 
  <input type="reset"class="btn btn-dark custom-margin-right-1" value="Reset"/>
  </div>
  );

}
export default FnolDetails