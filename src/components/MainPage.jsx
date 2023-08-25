import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function ManiPage() {
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
  ];

  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  const handleClearClick = () => {
    setInputValue("");
  };
  return (
    <>
      <main className="main-container py-5">
        <h3 className=" text-white">foodbot.ai</h3>
        <div className=" text-center text-white pt-5">
          <h3>Select User</h3>
          <h6>Select User you wish to start the session with</h6>
        </div>

        <>
          <div className="container mt-5">
            <div className="container justify-content-center">
              <div className="row">
                {user &&
                  user.map((m, index) => {
                    return (
                      <Link onClick={handleShow} key={index} className="col-4">
                        <div
                          className="bg-white rounded-5 text-center d-flex align-items-center justify-content-center"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <h3 className="text text-uppercase text-color1">
                            {m.first_name.charAt(0)}
                            {m.last_name.charAt(0)}
                          </h3>
                        </div>
                        <div className="text-white mt-3">
                          <h5 className=" text-capitalize">{m.first_name} </h5>
                          <h5 className="text-capitalize">{m.last_name}</h5>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </>

        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <input
                  type="text"
                  className="w-100 p-2 mb-3 border rounded-3 fs-5 ps-3"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <div className="number-buttons">
                  <div className="row justify-content-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                      <button
                        className="col-4 p-4 border bg-white"
                        key={number}
                        onClick={() => handleNumberClick(number)}
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="">
              <Button
                variant="secondary"
                style={{ background: "#35b59d" }}
                className="btn-lg w-25"
                onClick={handleClearClick}
              >
                Clear
              </Button>
              <Button
                variant="secondary"
                style={{ background: "#35b59d" }}
                className="btn-lg w-25"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="secondary"
                style={{ background: "#35b59d" }}
                className="btn-lg w-25"
                onClick={handleClose}
              >
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </main>
    </>
  );
}

export default ManiPage;
