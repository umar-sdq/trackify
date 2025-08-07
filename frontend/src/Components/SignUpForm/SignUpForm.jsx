import { useState } from "react";

const SignUpForm = () => {
  const [passwordNotEqual, setPasswordNotEqual] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const entries = Object.fromEntries(fd.entries());
    const data = {
      ...entries
    };

    if (data.password !== data["confirm password"]) {
      setPasswordNotEqual(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setPasswordNotEqual(false);
      alert("User created!");
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>First name</h2>
      <input name="name" type="text" placeholder="First name" required />

      <h2>Email address</h2>
      <input name="email" type="email" placeholder="Email address" required />

      <h2>Password</h2>
      <input name="password" type="password" placeholder="Password" required />

      <h2>Confirm password</h2>
      <input name="confirm password" type="password" placeholder="Confirm password" required />

      {passwordNotEqual && <p style={{ color: "red" }}>Passwords do not match.</p>}

      <button type="submit">Create an account</button>
    </form>
  );
};

export default SignUpForm;
