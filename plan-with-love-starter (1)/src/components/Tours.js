import Card from "./Card"

function Tours({toursDetails,removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan with me</h2>
            </div>
            <div className="cards">
                {
                    toursDetails.map((tour)=>{return <Card key={tour.id} {...tour} removeTourCard={removeTour}></Card>})   //Instead of using Card component multiple times,You can use this "map" method to create multiple cards by just writing card component once
                }
            </div>
        </div>
    )
}

export default Tours