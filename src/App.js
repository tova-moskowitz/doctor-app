import "./App.css";
import { useState, useEffect } from "react";
import Patients from "./components/Patients.js";
import Physicians from "./components/Physicians.js";
import TestParser from "./components/TestParser";
// import NewAppointment from "./components/NewAppointment.js";
import { set } from "mongoose";

function App() {
  const [physicians, setPhysicians] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("physician")
      .then((results) => results.json())
      .then((data) => {
        setPhysicians(data);
      });

    fetch("patient")
      .then((results) => results.json())
      .then((data) => {
        setPatients(data);
      });
  }, []);

  const handleClick = (e) => {
    if (physicians.id === patients.doctorID) {
      console.log(e.name);

      console.log(patients);
      return patients.map((el) => {
        return (
          <tr>
            <td>
              {el.firstName} {el.lastName}
            </td>
            <td>{el.apptTime}</td>
            <td>{el.apptKind}</td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <div className="flexContainer physicians">
        <div className="App"></div>
        <ul className="physicians flex-child">
          {/* <Patients patients={patients} physicians={physicians} /> */}

          {/* {physicians.map((el, ind) => {
            return (
              <li id={ind} onClick={handleClick} name={el.lastName}>
                {el.firstName} {el.lastName}
              </li>
            ); */}
          {/* })} */}
          {/* <Physicians physicians={physicians} patients={patients} /> */}
        </ul>
      </div>
      <div className="flex-child patients">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
              <th>Doctor Name</th>
              <th>Doctor Email</th>
            </tr>
            <TestParser patients={patients} />
            {/* <Patients patients={patients} physicians={physicians} /> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
