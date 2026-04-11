// const InstaUser = new Object()

const InstaUser = {}

InstaUser.id = "123"
InstaUser.name = "Sam"
InstaUser.isLoggedIn = false
// console.log(InstaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {... obj1, ...obj2, ...obj3}

// console.log(obj4);

const user = [
    {
        id: 1,
        name: "ak"
    },
    {
        id: 1,
        name: "ak"
    },
    {
        id: 1,
        name: "ak"
    }
]

user[1].email
// console.log(InstaUser);

// console.log(Object.keys(InstaUser));
// console.log(Object.values(InstaUser));
// console.log(Object.entries(InstaUser));

// console.log(InstaUser.hasOwnProperty("isLogged"));

const course = {
    coursename: "JS Advanced",
    price: "99",
    courseInstructor: "aditya"
}

//course.courseInstructor
//Deconstructoring
const {courseInstructor: Instructor} = course
console.log(Instructor);

// {
//     "name": "ak",
//     "coursenm": "welcome to js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
