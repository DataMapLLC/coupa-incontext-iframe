import logo from "./DataMap Logo - icon only.png";
import "./App.css";
function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const coupahost = queryParams.get("coupahost");
  const user_id = queryParams.get("user_id");
  const object_type = queryParams.get("object_type");
  const object_id = queryParams.get("object_id");

  return (
    <div>
      <div className="Context">
        Debugging information for Coupa In-Context Iframe
        <table>
          <tbody>
            <tr>
              <td>coupahost</td>
              <td>{coupahost}</td>
            </tr>
            <tr>
              <td>user_id</td>
              <td>{user_id}</td>
            </tr>
            <tr>
              <td>object_type</td>
              <td>{object_type}</td>
            </tr>
            <tr>
              <td>object_id</td>
              <td>{object_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
          <br></br>
          <br></br>
          <a
            className="App-link"
            href="https://www.datamapllc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn About DataMap
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
