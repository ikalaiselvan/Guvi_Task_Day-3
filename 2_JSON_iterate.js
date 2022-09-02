let details = [
    {
      "serialNumber": 1,
      "firstName": "Kalai",
      "lastName": "Selvan",
      "email": "kalai123@gmail.com"
    },
    {
      "serialNumber": 2,
      "firstName": "Kalai",
      "lastName": "Selvi",
      "email": "selvi123@gmail.com"
    },
    {
      "serialNumber": 3,
      "firstName": "Sundar",
      "lastName": "Rajan",
      "email": "sundar123@gmail.com"
    },
    {
      "serialNumber": 4,
      "firstName": "Vinoth",
      "lastName": "Kumar",
      "email": "vinoth123@yahoo.com"
    },
    {
      "serialNumber": 5,
      "firstName": "Pandian",
      "lastName": "Balaji",
      "email": "pandi123@yahoo.com"
    }
  ];


// for loop
for(i=0; i < details.length; i++){
  console.log(details[i].serialNumber);
}

// forin loop
for (const fName in details) {
  console.log(details[fName].firstName);
}

// forof loop
for (const lName of details) {
  console.log(lName.lastName);
}

// foreach loop

details.forEach(e => console.log(e.email));
