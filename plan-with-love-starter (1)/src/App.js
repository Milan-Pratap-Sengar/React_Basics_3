import React, { useState } from "react";
import Tours from "./components/Tours"
import data from "./data"


const App = () => {
  const[tours, setTours]=useState(data)

  function removeTourCard(id){
        const newTour=tours.filter(tour=>tour.id!==id)
        setTours(newTour);
  }

  function refreshHandler(){
    setTours(data);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
          <h2>No Tour left</h2>
          <button className="btn-white" onClick={refreshHandler}>Refresh Tours</button>
      </div>
    )
  }

  return(
    <div className="app">
      <Tours toursDetails={tours} removeTour={removeTourCard}></Tours>
    </div>
  )
};

export default App;
