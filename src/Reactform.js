import React, { useState } from 'react';
import "./App.css";

const App = () => {

  // useState({ name: "", email: "", phone: "" }) initializes the user state as an object with default empty values for name, email, and phone.
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [records, setRecords] = useState([])
  // The function onChanges is used to manage form input in a controlled component in React. Here's what it does:

  //   It takes an event e as its parameter, which is triggered when a user interacts with a form field (like typing in an input box).
  // const { name, value } = e.target; extracts the name and value from the form field that triggered the event. Each form field typically has a name attribute that distinguishes it (like "email", "password", etc.), and value is what the user types into the field.

  // setuser({ ...user, [name]: value }) updates the component's user state with the new input. It uses the spread operator (...user) to copy the existing user data, then updates only the field with the name specified by name and sets its value to what the user entered.

  const onChanges = (e) => { // e is event object jo bhi website pe event ho raha hai wo pata chalta hai
    const { name, value } = e.target;
    setuser({ ...user, [name]: value })
  }

  const onSubmit = (event) => {
    // It takes an event as a parameter, which refers to the form submission event.
    event.preventDefault();
    // event.preventDefault(); prevents the default behavior of the form submission, which is usually to reload or refresh the page. By doing this, the function allows you to handle the form submission in your own way (such as validating the input or sending the form data via an API) without the page refreshing.

    const newrecords = { ...user, id: new Date().getTime().toString() }
    setRecords([...records, newrecords])
    setuser({ name: "", email: "", phone: "" })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <lable>name</lable>
        <input type="text" name="name" required value={user.name} onChange={onChanges} />
        <lable>email</lable>
        <input type="email" name="email" required value={user.email} onChange={onChanges} />
        <lable>phone</lable>
        <input type="phone" name="phone" required value={user.phone} onChange={onChanges} />
        <button type="submit">Submit</button>
      </form>

      <div>
        {
          records.map((elements) => {
            return (
              <div className='records'>
                <p className='records'>{elements.name}</p>
                <p className='records'>{elements.email}</p>
                <p className='records'>{elements.phone}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default App;