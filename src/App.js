import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { users as usersAtom, view as viewAtom } from "./Atoms";
import Menu from "./Menu";
import './App.css';

function App() {

  const [users, setUsers] = useRecoilState(usersAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    
    const getUsers = async () => {
      
      if (view === "users") {
        const url = `https://young-sierra-56844.herokuapp.com/${view}`;
        const resp = await fetch(url);
        const body = await resp.json();
        setUsers(body.users);
      } else {
        setUsers([]);
      }

    }

    getUsers();

  }, [view]);


  return (
    <div className="App">
      <header className="App-header">
        <h2>RECOIL DEMO</h2>
        <Menu />
        <div className="container">
          {
            users.length > 0 ?
              users.map( user => {
                return (
                  <p key={user._id}>{user.username} - {user.email}</p>
                )
              })  
            :
              <p>Home Sweet Home</p>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
