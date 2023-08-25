import React from "react";

function Password() {
  return (
    <div className="container text-center">
    <div className=" text-center pt-5" style={{width:"400px",height:"auto"}} >
      <h4>Password</h4>
      <input type='text' className="w-100 p-2 mb-3 border rounded-3 fs-5 ps-3" placeholder="Enter Your Password" style={{letterSpacing:"0.1rem"}}/>
      <div class="container text-center w-auto mb-4">
        <div class="row">
          <div class="col p-4 border">1</div>
          <div class="col p-4 border">2</div>
          <div class="col p-4 border">3</div>
        </div>
        <div class="row">
          <div class="col p-4 border">4</div>
          <div class="col p-4 border">5</div>
          <div class="col p-4 border">6</div>
        </div>
        <div class="row">
          <div class="col p-4 border">7</div>
          <div class="col p-4 border">8</div>
          <div class="col p-4 border">9</div>
        </div>
        <div class="row">
          <div class="col p-4 border">0</div>
          
        </div>
      </div>
      <div className=" d-flex flex-row justify-content-center gap-3">
        <div className="btn btn-lg text-white w-50 border-1" style={{background:"#35b59d"}}>Cancel</div>
        <div className="btn btn-lg text-white w-50 border-1" style={{background:"#35b59d"}}>Ok</div>
      </div>
    </div>
    </div>
  );
}

export default Password;
