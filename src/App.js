import data from "./data";
import Navbar from "./Navbar";
import TravelItem from "./TravelItem";

function App() {
  const travels = data.map(
    (item) => {
       return <TravelItem 
          key={item.id}
          item={item}
        />
    }
  )


  return (
    <div className="main-container">
        <Navbar />
        <div className="travels-container">{travels}</div>
    </div>
  );
}

export default App;
