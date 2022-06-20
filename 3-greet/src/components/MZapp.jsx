import FullName from './FullName';
import FirstName from './FirstName';

const MZApp = () => {
  const showInfo = (fName, lName) => {
    alert(`Notification: ${fName} ${lName}`);
  };

  return (
    <>
      <h1>
        Welcome <FullName fName="Manish" lName="Zope" notifyParent={showInfo} />
      </h1>
      <h2>
        Welcome <FirstName fName="Manish" />
      </h2>
      <h1>
        Welcome <FullName fName="Hem" lName="Zope" notifyParent={showInfo} />
      </h1>
      <h2>
        Welcome <FirstName fName="Hem" />
      </h2>
      <h1>
        Welcome <FullName fName="Mit" lName="Zope" notifyParent={showInfo} />
      </h1>
      <h2>
        Welcome <FirstName fName="Mit" />
      </h2>
    </>
  );
};

export default MZApp;
