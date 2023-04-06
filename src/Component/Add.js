import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import { getDatabase, ref, set } from "firebase/database";

export default function Add() {
  const [UserId, setId] = useState("");
  const [UserName, setName] = useState("");
  const [Password, setPass] = useState("");
  const [Contact, setNumber] = useState("");
  const navigate = useNavigate();

  const uid = Math.floor(Math.random() * 10000 + 1);

  // Add Data On Firebase Database
  const pushDate = (e) => {
    e.preventDefault();
    const db = getDatabase();
    try {
      set(ref(db, "users/" + UserId), {
        id: UserId,
        name: UserName,
        pass: Password,
        Number: Contact,
      });
      alert("Saved");
      setId(uid);
      setName("");
      setPass("");
      setNumber("");

      navigate("/");
    } catch (e) {
      console.log("érror", error);
    }
  };

  const showData = () => {
    navigate("/");
  };

  const unique_id = () => {
    setId(uid);
  };

  return (
    <div className="container AddBox">
      <form className="add-Form">
        <h4>Create New Employee Id : </h4>

        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserId
          </label>

          <input
            type="Text"
            className="form-control"
            value={UserId}
            onChange={unique_id}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserName
          </label>

          <input
            type="Text"
            className="form-control"
            value={UserName}
            onChange={(e) => setName(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={Password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contact Number
          </label>
          <input
            type="number"
            className="form-control"
            value={Contact}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={pushDate}>
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-primary ms-3"
          onClick={showData}
        >
          Show-Data
        </button>
      </form>
    </div>
  );
}
