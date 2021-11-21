//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPg() {

        if (this.rating === 'PG') {
            return `${this.title} ${this.studio} ${this.rating}`;
        }


    }
}

Movies = new Movie('Casino Royale', 'Eon Productions', 'PG­');

/* 
, new Movie('DDLJ', 'YRF', 'PG')];
new Movie('FreeGuy', 'Disney', 'PG')
new Movie('Whitehousedown', 'xyz', 'PG14')
new Movie('2012', 'MARVAL', 'PG') */




console.log(Movies.getPg());