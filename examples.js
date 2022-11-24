let cars = [
     {
        "color":"purple",
        "type":"minivan",
        "registration":new Date('2022-01-03'),
        "capacity":7
     },
     {
        "color":"red",
        "type":"station wagon",
        "registration":new Date('2022-03-03'),
        "capacity":5
     },
     {
        "color":"black",
        "type":"wagon",
        "registration":new Date('2022-06-10'),
        "capacity":5
     },
     {
        "color":"orange",
        "type":"station wagon",
        "registration":new Date('2023-01-19'),
        "capacity":8
     },
     {
        "color":"green",
        "type":"station wagon",
        "registration":new Date('2023-10-05'),
        "capacity":6
     },
];

//add an object at the first position, use Array.unshift. 

let car = {

    "color":"red",
    "type":"cabrio",
    "registration":new Date('2022-06-02'),
    "capacity":2
}

cars.unshift(car);

//Add a new object at the end - Array.push

let car_2 = {
    "color":"black",
    "type":"cabrio",
    "registration":new Date('2022-05-02'),
    "capacity":2
}

cars.push(car);

//Add a new object in the middle - Array.splice
let car_3 = {

     "color":"blue",
     "type":"cabrio",
     "registration":new Date('2022-06-20'),
     "capacity":3

}

/*
Array.splice(
    {index where to start},
    {how many items to remove},
    {items to add}
  );
*/

cars.splice(4,0,car);


//Find an object in an array by its values - Array.find.

let new_car = cars.find(car => car.color === "red");

console.log(car);


let redCars = cars.filter(car => car.color === "red");
console.log(redCars);

let sizes = cars.map(car => {

    if(car.capacity <= 3) {
        return "small";
    }
    if(car.capacity <= 5) {
        return "medium";
    }

    return "large";

});

console.log(sizes);


let carsProperties = cars.map(car => {

    let properties = {
        "capacity":car.capacity,
        "size":"large"
    };

    if(car.capacity <= 5) {
        properties['size'] = "medium";
    }

    if(car.capacity <= 3) {
        properties['size'] = "small";
    }

    return properties;

});

console.log(carsProperties);

//foreach 
cars.forEach(car => {
    car['size'] = "large";
    if(car.capacity <= 5) {
        car['size'] = "medium";
    }
    if(car.capacity <= 3) {
        car['size'] = "small";
    }
});
console.log(cars);




