import React from "react";
const Login = () =>{
    const navigate = useNavigate();
  const handleLogout = () => {
    alert('Logging out...'); 
    navigate('/'); 
  };
    return (
        <>
        <section>
          <div className="container">
            <div className="row">
                <div className="col">
                      <h1>Login Page</h1>
            <p>Welcome back please login to your account</p>
            <label>
             <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
            />
            <br />
            <input 
              type="password"
              placeholder="Password" 
              className="password-input"
            />
            <br />

            <button type="submit"  onClick={handleLogout}>Login</button>
             <button onClick={() => navigate(-1)}>Go Back</button>
            </label>
                </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default Login;