import React from "react";
import { Link, useNavigate } from "react-router-dom";


function User() {
    const user = [
      {
        user_id: 300,
        isManager: 1,
        user_pin: 1234,
        first_name: "POS Manager",
        last_name: "Stage",
      },
      {
        user_id: 302,
        isManager: 0,
        user_pin: 1234,
        first_name: "ashish",
        last_name: "kumar",
      },
      {
        user_id: 315,
        isManager: 0,
        user_pin: 1234,
        first_name: "POS Cashier",
        last_name: "Stage",
      },
      {
        user_id: 328,
        isManager: 1,
        user_pin: 1234,
        first_name: "Ashwani",
        last_name: "Kumar",
      },
      {
        user_id: 329,
        isManager: 1,
        user_pin: 1234,
        first_name: "nikhil",
        last_name: "pubg",
      },
      {
        user_id: 331,
        isManager: 0,
        user_pin: 1234,
        first_name: "new ui",
        last_name: "user",
      },
      {
        user_id: 332,
        isManager: 1,
        user_pin: 1234,
        first_name: "new ui",
        last_name: "manager",
      },
      {
        user_id: 333,
        isManager: 1,
        user_pin: 1234,
        first_name: "new",
        last_name: "oo1",
      },
      {
        user_id: 334,
        isManager: 1,
        user_pin: 1234,
        first_name: "new",
        last_name: "oo2",
      },
      {
        user_id: 335,
        isManager: 0,
        user_pin: 1234,
        first_name: "new",
        last_name: "oo3",
      },
      {
        user_id: 336,
        isManager: 1,
        user_pin: 1234,
        first_name: "new",
        last_name: "oo4",
      },
      {
        user_id: 337,
        isManager: 1,
        user_pin: 1234,
        first_name: "new",
        last_name: "oo5",
      },
      {
        user_id: 338,
        isManager: 1,
        user_pin: 1234,
        first_name: "new",
        last_name: "oo6",
      },
    ];

   const navigate = useNavigate()

  return (
    <>
      <div className="container mt-5">
        <div className="container justify-content-around">
          <div className="row">
        {user && user.map ((m,index) => {
                return (
                  <Link onClick={navigate(`/password/${m.user_id}`)} key={index} className="col-4">
                     <div className="bg-white rounded-5 text-center d-flex align-items-center justify-content-center" style={{width:"100px",height:"100px"}}>
            <h3 className="text text-uppercase text-color1">{m.first_name.charAt(0)}{m.last_name.charAt(0)}</h3>
            </div>
            <div className="text-white mt-3">
            <h5 className=" text-capitalize">{m.first_name} </h5>
            <h5 className="text-capitalize">{m.last_name}</h5>
                  </div>
                  </Link>
                )
                })}

           
          </div>
         
        </div>
      </div>
    </>
  );
}

export default User;


