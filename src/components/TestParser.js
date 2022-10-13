const TestParser = (props) => {
  return props.patients.map((patient) => {
    return (
      <tr>
        <td>
          {patient.firstName} {patient.lastName}
        </td>
        <td>{patient.apptTime}</td>
        <td>{patient.apptKind}</td>
        <td>
          {patient.doctor.firstName} {patient.doctor.lastName}
        </td>
        <td>{patient.doctor.email}</td>
      </tr>
    );
  });
};

export default TestParser;
