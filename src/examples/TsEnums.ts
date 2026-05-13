//  NUMERIC ENUM DEFAULT

enum Direction1 {North,East,South,West

}



console.log(Direction1.North);

console.log(Direction1.West);


// NUMERIC ENUM INITIALIZED 

enum Direction2 {

    North = 1,

    East,

    South,

    West

}



console.log(Direction2.North);

console.log(Direction2.West);


//  FULLY INITIALIZED ENUM 

enum StatusCode {

    NotFound = 404,

    Success = 200,

    Accepted = 202,

    BadRequest = 400

}



console.log(StatusCode.NotFound);

console.log(StatusCode.Success);


// STRING ENUM 

enum Direction3 {

    North = "North",

    East = "East",

    South = "South",

    West = "West"

}



console.log(Direction3.North);

console.log(Direction3.West);