//var degree = prompt("Enter Your Degree")
 //if (degree == '' || degree == null ) console.log('empty degree')
//else if (degree >= 90 ) console.log('A')
    //else if (degree < 90 && degree >= 80 ) console.log('B')
     // else  if (degree < 80 && degree >= 70 ) console.log('C')
         //else if (degree < 70 && degree >= 60 ) console.log('D')
           // else if (degree < 60 ) console.log('F')
         
      //  function loop(startN,endN,breakN,continueN){
         //   for (var i = startN; i < endN; i++) {
              
           //    if (i === breakN) { break;}
             
            // else if (i === continueN) {   continue; }
             
           //  console.log(i)
          //  }
        // }
        //   loop(0,10,8,3)
//var arrayN = [12,18,5,10,6]
//var userN = prompt("enter your num")
//var index =arrayN.findIndex(ele => ele == userN)
//console.log(index)

var employers = []

function addEmployee(Name,id,Balance){
  var newEmployee={Name:Name,id:id,Balance:Balance};
employers.push(newEmployee);
return newEmployee;
}

function editEmployeeBalance(id,newBalance){
    var ix = employers.findIndex(item => item.id === id)
    if(ix == -1) console.log('Not Exist')
    else{

        employers[ix].Balance = newBalance;
        
      
    }
}

function deleteEmployee(id){
    var ix = employers.findIndex(item => item.id === id)
    if(ix == -1) console.log('Not Exist')
    else{
      employers.splice(ix , 1);
      return true;
    }
}

addEmployee('Ahmed',1,1000)
addEmployee('mohamed',2,2000)
console.table(employers)


editEmployeeBalance(1,1002)
console.table(employers)


 deleteEmployee(1)
console.table(employers)