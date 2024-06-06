import "./index.css";

function Login() {
  var componentName = "Login";

  // value username and password
  // event handle -> onclick -> logic
  // validation
  // locally hardcode 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh"
      }}
    >
      <h1>{componentName}</h1>

      <div style={{ padding: "20px" }}>
        <input placeholder="Enter Username" style={{ padding: "10px 30px" }} />
      </div>
      <div style={{ padding: "20px" }}>
        <input placeholder="Enter Password" type="password" style={{ padding: "10px 30px" }} />
      </div>

      <button style={{ padding: "10px 20px" }}>Submit</button>
    </div>
  );
}

export default Login;
