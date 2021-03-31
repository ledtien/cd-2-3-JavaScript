var programmers = []
programmers.push("Bill");
programmers.push("Mark");
programmers.push("Elon");
programmers.splice(1,1,'Alan');
programmers.splice(0, 1);

console.log(programmers);

var myCompanies = ['Apple', 'Google'];
var theirCompanies = ['Microsoft', 'MOMO'];
var techCompanies = myCompanies.concat(theirCompanies);

console.log(techCompanies);

//Objects
var mark = {};
mark.fullname = "Le Duy Tien";
mark.age = 28;
mark.city = "Ho Chi Minh";
mark.companies = "CoderSchool";
mark.lastName = "Le";
mark.Fname = "Tien";
console.log(mark);

var timcook = {
    age: 28,
    fullname: "Tim Cook",
    companies: "Apple", 
    lastName: "Cook",
};
console.log(timcook);

function isAnAdult(person) {
    if (person.age > 18) {
        console.log("Is an Adult");
    }
}

     isAnAdult(mark);

function isCoderSchoolStaff (person) {
    if (person.companies === "CoderSchool") {
        console.log("Work at CoderSchool")
    } else {
        console.log("Work at", person.companies)
    }
}

isCoderSchoolStaff (mark);

var charles = { 
    age: 35,
    fullname: "Charles",
    companies: "CoderSchool",
};

isCoderSchoolStaff(charles)

function describePerson(person) {
    console.log(person);
}

describePerson(mark);

function logLastName (person) {
    console.log(person.lastName)
}

logLastName(timcook)

function getInitials(person) {
    console.log(person.lastName, person.Fname)
}
getInitials(mark)

function ageOneYear (person) {
    person.age++;
    console.log(person.age)
}
ageOneYear(charles)

function getBirthYear(person) {
    var person = {
        year: 2021 - person.age,
    }
    console.log(person.year)
}

getBirthYear(charles)

var vietnam = {
    location: 'Southeast Asian',
    capital: 'Ha Noi',
    population: 96460000,
    prime: 'Nguyen Xuan Phuc',
    largestcity: "Ho Chi Minh",
    language: "Vietnamese",
}

console.log(vietnam)



//Loops
var number = [1, 2, 3, 4, 5];
 for ( i = 0; i < number.length; i++) {
     console.log(number[i])
 }

 //Truthy/Falsy

var one = 1;
if (one) {
    console.log("Is Truthy");
}

var zero = 0;
if (zero) {
    console.log("Is truthy")
} else {
    console.log("Insn't truthy");
}


