import React, {useEffect, useState} from 'react';
import { initUser } from './helper/initializer';
import './App.css';
import { IName, IUser } from './helper/userInterface';
import { getRandomUser } from './api/dataManagement';


function App() {
  const [user, setUser] = useState<IUser>(initUser); //to create a init user
  const [userFirstName, setuserFirstName] = useState("");
  const [userLastName, setuserLastName] = useState("");

  let fakeIndex = 0;

  const fetchData = async () => {
    const response: IUser = await getRandomUser();
    setUser(response);
    setuserFirstName(response.name.first);
    setuserLastName(response.name.last);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

  }

  const handleClick = () => {
    user.name.first = userFirstName;
    user.name.last = userLastName;
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      {
        <>
        <header className="App-header">
          Random User App
        </header>
        <h1> User info:</h1>
        <section className="App-userInfo">
          <li key={fakeIndex+1}>Name: {userFirstName} {userLastName}</li>
          <li key={fakeIndex+2}>Age: {user.dob.age}, birthday: {user.dob.date.toString()}</li>
          <li key={fakeIndex+3}>Gender: {user.gender}</li>
          <br/>
          <li key={fakeIndex+4}>Address: 
            <br/> Street: {user.location.street.name} {user.location.street.number} 
            <br/> City: {user.location.city} 
            <br/> country: {user.location.country}
            <br/> Postcode: {user.location.postcode} 
            <br/> Coordinates: {user.location.coordinates.latitude}, {user.location.coordinates.longitude}
          </li>
            <br/>
          <li key={fakeIndex+5}>Contacts: 
            <br/> Email: {user.email} 
            <br/> Phone: {user.phone} 
            <br/> cell: {user.cell}
          </li>
          
          <br />
        </section>        

        <h1>Form for update:</h1>
        <section className='App-section-form'>
          <form className='form'> 
              <label>First Name:</label>
              <input type="text" onChange={(e) => {setuserFirstName(e.target.value)}} value={userFirstName}></input>
              <label>Last Name:</label>
              <input type="text" onChange={(e) => {setuserLastName(e.target.value)}} value={userLastName}></input>
          </form>
        </section>
      </>
      }
    </div>
  );
}

export default App;
