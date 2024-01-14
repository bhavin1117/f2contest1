/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    
        let developerList = arr.map(function(employee) {
            if (employee.profession === "developer") {
                return employee;
            }
        }).filter(function(item) {
            return item !== undefined;});
    

        console.log(developerList);
    }
    
    PrintDeveloperbyMap();
  
  function PrintDeveloperbyForEach() {

       
    
        let developerList = [];
    
        
        arr.forEach(function(employee) {
            if (employee.profession === "developer") {
                developerList.push(employee);
            }
        });
    
        console.log(developerList);
    }
    PrintDeveloperbyForEach();
  
  function addData() {
        let arr = [
            { id: 1, name: "john", age: "18", profession: "developer" },
            { id: 2, name: "jack", age: "20", profession: "developer" },
            { id: 3, name: "karen", age: "19", profession: "admin" },
        ];
    
        let newEmployee = {
            id: 4,
            name: "susan",
            age: "20",
            profession: "intern"
        };
    
        arr.push(newEmployee);
    
       
        console.log(arr);
    }
    addData();
  
  function removeAdmin() {
    //Write your code here, just console.log
        

            let updatedArr = arr.filter(function(person) {
                return person.profession !== "admin";
            });

            console.log(updatedArr);
        }
    
    removeAdmin();
  
  function concatenateArray() {

        
        let newArr = [
            { id: 4, name: "rajesh", age: "21", profession: "designer" },
            { id: 5, name: "ramnlal", age: "22", profession: "developer" },
            { id: 6, name: "jignesh", age: "23", profession: "admin" },
        ];
       
        let combinedArr = arr.concat(newArr);
        
        console.log(combinedArr);
     }
     
     concatenateArray();