// import logo from './logo.svg';
import Header from './Header'
import Journey from './Journey';
import data from './data.js'

const places = data.map(function(place){
  return(
    <Journey
      key = {place.key}
      {...place}
    />
  )
})

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="grid">
        {places}
      </div>
    </div>
  );
}

export default App;
