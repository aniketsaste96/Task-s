//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    //Default rating when no rating provided
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio
        this.rating = rating;


    }
    //Get only those movies with rating PG
    getPG(moviesinstances) {
        return moviesinstances.filter((x) => x.rating == "PG")
    }
}




let film1 = new Movie("Casino Royale", "Eon Productions", "PG­13")

//Instances
let mov1 = new Movie("FreeGuy", "Disney", "PG")
let mov2 = new Movie("WWZ", "SONY", "PG")
let mov3 = new Movie("Act of Valour", "KingsCinema", "R")
let moviesinstances = [mov1, mov2, mov3];
let arr = new Movie(moviesinstances);

//get movies with only rating PG
console.log(arr.getPG(moviesinstances))


//OUTPUT
/*
Array [ {…}, {…} ]
​
0: Object { title: "FreeGuy", studio: "Disney", rating: "PG" }
​
1: Object { title: "WWZ", studio: "SONY", rating: "PG" }
​
length: 2
*/





