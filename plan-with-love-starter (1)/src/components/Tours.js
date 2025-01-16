import Card from "./Card"

function Tours({toursDetails,removeTour}){

    // spread operator {...obj} is used to make a copy/clone of specified object {here,tourDetails is an array of object and tour(in map function) is just a iterator's value(i.e object of a perticular index)}

    return(
        <div className="container">
            <div>
                <h2 className="title">Plan with me</h2>
            </div>
            <div className="cards">
                {
                    // Instead of rendering 7 "Card" component to display 7 cards on UI, You can use this method.
                    // toursDetails: This is an array of objects representing different tours.
                    // map(): This is a method used to iterate over every item in the toursDetails array. For each item (tour), it runs the provided callback function.
                    // (tour): Each individual item in the toursDetails array is assigned to the variable tour during each iteration.
                    toursDetails.map((tour)=>{return <Card key={tour.id} {...tour} removeTourCard={removeTour}></Card>})   //Instead of using Card component multiple times,You can use this "map" method to create multiple cards by just writing card component once
                }
            </div>
        </div>
    )
}

export default Tours