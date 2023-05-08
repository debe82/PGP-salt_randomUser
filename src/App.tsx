import React, {useEffect, useState} from 'react';
import { initUser } from './helper/initializer';
import './App.css';
import { IName, IUser } from './userInterface';
import { getRandomUser } from './api/dataManagement';


function App() {
  const [user, setUser] = useState<IUser>(initUser); //to create a init user
  let fakeIndex = 0;

  const fetchData = async () => {
    const response: IUser = await getRandomUser();
    setUser(response);
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
        <article className="App-userInfo">
          <li key={fakeIndex+1}>Name: {user.name.first} {user.name.last}</li>
          <li key={fakeIndex+2}>Age: {user.dob.age}, birthday: {user.dob.date.toString()}</li>
          <li key={fakeIndex+3}>Gender: {user.gender}</li>
          <br/>
          <li key={fakeIndex+4}>Address: 
            <br/> Street: {user.location.street.name} {user.location.street.number} 
            <br/> city: {user.location.city}, <br/> country: {user.location.country},
            <br/> Postcode: {user.location.postcode} 
            <br/> Coordinates: {user.location.coordinates.latitude}, {user.location.coordinates.longitude}</li>
            <br/>
          <li key={fakeIndex+5}>Contacts: <br/> Email: {user.email}, <br/> phone: {user.email}, <br/> cell: {user.cell}</li>
          
          <br />
        </article>        
        <section>
        
        </section>
      </>
      }
    </div>
  );
}

export default App;
