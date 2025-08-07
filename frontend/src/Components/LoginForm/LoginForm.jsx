const LoginForm = () => {
  return (
    <div>
      <h2>Username</h2>
      <input type="text" placeholder="Username" />
      <h2>Password</h2>
      <input type="password" placeholder="Password" />  
      <h2>Forgot Password?</h2>
      <h2>No account? <a href="/signup">Create an account.</a></h2>
      
      
    </div>
  );
}

export default LoginForm;