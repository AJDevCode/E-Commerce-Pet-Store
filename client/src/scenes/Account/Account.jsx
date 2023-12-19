import React, { useState, useEffect } from 'react';
import auth from './authen';
import{useNavigate} from "react-router-dom";


export const Account = (props) => {
      // History hook

  const navigate = useNavigate()
  // User information hook
  const [user, setUser] = useState({
    "id": "",
    "email": "",
    "is_active": true,
    "is_superuser": false,
    "firstName": "",
    "lastName": ""
  });

  // Fetch user information on page load
  useEffect(() => {
    const fetchData = async () => {
      if (auth.isAuthenticated()){
        const result = await auth.getUser();
        setUser(result);
      };
    };
    fetchData();
  // eslint-disable-next-line
  }, []);

  // Function to call logout
  const callLogout = async () => {
    auth.logout(() => {
      navigate("/");
    });
  };



    return (
        <div>
            <h1>`Hello ${user.firstName} ${user.lastName}`</h1>
            <label>`Email: ${user.email}`</label>
            <form>
                <button type="submit" onClick={callLogout}>Log out</button>
            </form>
            <form>
                <button type="submit" onClick={()=>navigate("/")}>Return Home</button>
            </form>
        </div>
    )
}