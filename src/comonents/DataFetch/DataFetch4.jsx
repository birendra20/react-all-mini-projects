import { useEffect, useState } from "react";
import "./DataFetch1.css";

const url = "https://jsonplaceholder.typicode.com/users";

export default function DataFetchingP4() {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const response = await fetch(url);
    const Data = await response.json();
    setUserData(Data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h2>User Data</h2>
      {userData.map((user) => {
        const {
          name,
          username,
          email,
          address: { street, city, zipcode }
        } = user;
        return (
          <>
            <div className="card">
              <p>
                <b>Name:</b>
                {name}
              </p>
              <p>
                <b>Username:</b>
                {username}
              </p>
              <p>
                <b>Email:</b>
                {email}
              </p>
              <p>
                <b>adress:</b>
                {street}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
