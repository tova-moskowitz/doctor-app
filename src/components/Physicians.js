const Physicians = (props) => {
  if (props.physicians.id === props.patients.doctorID) {
  }

  const handleClick = (e) => {
    console.log(e.target.getAttribute("name"));
  };

  return props.physicians.map((el, ind) => {
    return (
      <>
        <li id={ind} onClick={handleClick} name={el.lastName}>
          {el.firstName} {el.lastName}
        </li>
      </>
    );
  });
};

export default Physicians;
