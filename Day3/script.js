// For JSON iterate over all for loops (for, for in, for of, forEach

var data = {
    'students': [
        { "name": "Aniket", "city": "pune", "Phone": 123456789 },
        { "name": "keshav", "city": "kolhapur", "Phone": 98498498 },
        { "name": "keshav", "city": "nashik", "Phone": 28568984 },
        { "name": "Neha", "city": "chennai", "Phone": 98745612 },
    ]
}

//for 
for (let i = 0; i < data.students.length; i++) {
    console.log(data.students[i]);
}




//for in
for (key in data.students) {
    console.log(data.students[key]);
}

//for of
for (const key of data.students) {
    console.log(key);

}


//for Each

data.students.forEach((student) => {
    console.log(student);
})


/*
output
Object { name: "Aniket", city: "pune", Phone: 123456789 }
script.js:12:13
Object { name: "keshav", city: "kolhapur", Phone: 98498498 }
script.js:12:13
Object { name: "keshav", city: "nashik", Phone: 28568984 }
script.js:12:13
Object { name: "Neha", city: "chennai", Phone: 98745612 }
script.js:12:13
Object { name: "Aniket", city: "pune", Phone: 123456789 }
script.js:20:13
Object { name: "keshav", city: "kolhapur", Phone: 98498498 }
script.js:20:13
Object { name: "keshav", city: "nashik", Phone: 28568984 }
script.js:20:13
Object { name: "Neha", city: "chennai", Phone: 98745612 }
script.js:20:13
Object { name: "Aniket", city: "pune", Phone: 123456789 }
script.js:25:13
Object { name: "keshav", city: "kolhapur", Phone: 98498498 }
script.js:25:13
Object { name: "keshav", city: "nashik", Phone: 28568984 }
script.js:25:13
Object { name: "Neha", city: "chennai", Phone: 98745612 }
script.js:25:13
Object { name: "Aniket", city: "pune", Phone: 123456789 }
script.js:33:13
Object { name: "keshav", city: "kolhapur", Phone: 98498498 }
script.js:33:13
Object { name: "keshav", city: "nashik", Phone: 28568984 }
script.js:33:13
Object { name: "Neha", city: "chennai", Phone: 98745612 }


*/





