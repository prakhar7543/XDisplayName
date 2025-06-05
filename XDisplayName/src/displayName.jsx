import React, { useState } from "react";

export default function DisplayName() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [fullName, setFullName] = useState("");

  let handleFirstName = (e) => {
    let first = e.target.value;
    setFirstName(first);
  };

  let handleLastName = (e) => {
    let last = e.target.value;
    setLastName(last);
  };

  let handleSubmit = (e) => {
      e.preventDefault();
      setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h2>Full Name Display</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <label htmlFor="first">First Name: </label>
          <input
            id="first"
            type="text"
            pattern="[A-Za-z]+"
            placeholder="Enter your first name"
            onChange={handleFirstName}
            required
          />
        </div>

        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <label htmlFor="last">Last Name: </label>
          <input
            id="last"
            type="text"
            pattern="[A-Za-z]+"
            placeholder="Enter your Last name"
            onChange={handleLastName}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            backgroundColor: "lightgray",
            width: '100px',
          }}
        >
          Submit
        </button>
      </form>

          {fullName && 
      <div
        className="display"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "large",
          fontWeight: "400",
        }}
      >
        Full Name : {fullName}
      </div>
      }
    </div>
  );
}
