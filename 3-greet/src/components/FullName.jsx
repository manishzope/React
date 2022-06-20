function FullName({fName, lName, notifyParent}) {
  return (
    <>
      {fName} {lName}
      <br/>
      <button onClick={() => {notifyParent(fName, lName)}}>Notify</button>
    </>
  );
}

export default FullName;
