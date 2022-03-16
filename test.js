// Right HigerOrder Function in JS


// function parentFun(fn) {
//     return function () {
//         try {
           
//             const returnValuFromOriginal = fn.apply(this, arguments);
//             return returnValuFromOriginal
            
//         } catch (ex) {
//            throw new Error(ex)
//         }
//     };
// }

// const add = (a,b) => {

//     return a+b
// }

// console.log(parentFun(add)(11,33))

//get/venu/list

/*
Create signup form UI
Added signup form validation
Integrate Signup api
Create Profile Popup Modal
Integrate User Profile api
Over through scss
Designing Login page 
*/

//  To desing the login page
//  Design the Profile update page 
//  Integrate the profile update api
//  User image update api

// post http://localhost:5000/info/contact-us/create
// Content-Type: application-json
// Authorization: "token" 

// {
//     type:"General",
//     details:"something details"
// }



function getData() {

    let newArr=[]

   newArr= filterData().then((data) =>{
       return "data recived"
    })
    console.log(newArr.then((d)=>console.log(d)))

     function filterData(){

        return Promise.resolve(["a","b","c"])
    }
    return Promise.resolve([newArr])
}

getData().then(d=>console.log(d))