import './App.css'

function App() {

  return (
    <>
      <p className="not-found">404 NOT FOUND</p>
      <div className="main-container">
        <div>
        <img src="./src/assets/scarecrow.png" alt=""/>
        </div>
        <div className="text-container">
          <p className="title">I have bad news for you</p>
          <p className="parrafo">The page you are looking for might be removed or is temporarily unavailable.</p>
          <button>BACK TO HOMEPAGE</button>
        </div>
      </div>
      <div className="attribution">
        Coded by <a href="#">Juan Camilo Clement y Daniel Hincapié</a>.
      </div>
    </>
  );
}

export default App;