import React, { useState } from 'react';

const App = () => {

// useState({ name: "", email: "", phone: "" }) initializes the user state as an object with default empty values for name, email, and phone.
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
  });

// The function handlechanges is used to manage form input in a controlled component in React. Here's what it does:

//   It takes an event e as its parameter, which is triggered when a user interacts with a form field (like typing in an input box).
// const { name, value } = e.target; extracts the name and value from the form field that triggered the event. Each form field typically has a name attribute that distinguishes it (like "email", "password", etc.), and value is what the user types into the field.

// setuser({ ...user, [name]: value }) updates the component's user state with the new input. It uses the spread operator (...user) to copy the existing user data, then updates only the field with the name specified by name and sets its value to what the user entered.

  const handlechanges = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    // It takes an event as a parameter, which refers to the form submission event.
    event.preventDefault();
    // event.preventDefault(); prevents the default behavior of the form submission, which is usually to reload or refresh the page. By doing this, the function allows you to handle the form submission in your own way (such as validating the input or sending the form data via an API) without the page refreshing.
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required value={user.name} onChange={handlechanges} />
        <input type="email" name="email" required value={user.email} onChange={handlechanges} />
        <input type="phone" name="phone" required value={user.phone} onChange={handlechanges} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;