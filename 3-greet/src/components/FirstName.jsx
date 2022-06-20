import LastName from "./LastName";

function FirstName(props) {
  return (
    <>
      {props.fName} <LastName lName="Zope" />
    </>
  );
}

export default FirstName;
