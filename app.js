var employeeApp = angular.module('employeeApp', []);

employeeApp.factory('empData', function() {

  return {

    employeeList: [
      {
        firstName: "Mike",
        lastName: "Starr",
        department: "IT"
      }, 
      {
        firstName: "David",
        lastName: "Norris",
        department: "Property"
      }, 
      {
        firstName: "Nancy",
        lastName: "Davies",
        department: "P/L"
      }, 
      {
        firstName: "Michelle",
        lastName: "Foxworth",
        department: "Casualty"
      }, 
      {
        firstName: "Pam",
        lastName: "Payne",
        department: "Property"
      }, 
      {
        firstName: "Frankie",
        lastName: "Olds",
        department: "Claims"
      }, 
      {
        firstName: "Melissa",
        lastName: "Conner",
        department: "Legal and Reg"
      }
    ],
    
    
   
  };
  
});



employeeApp.controller('EmployeeController',
  function EmployeeController($scope, empData) {

    $scope.sortorder = 'LastName';

    $scope.employees = empData.employeeList;

    var empBeingEdited = null;

    $scope.editEmployee = function(empId) {

      //todo - make a service
      if (empId == 'new') {
        empBeingEdited = null;
      } else {
        empBeingEdited = empId;
      }
     
    };


  }
);


employeeApp.controller('EmpEditModalController',
  function EmpEditModalController($scope, $rootScope, empData) {


    $scope.newEmp = true;
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.dept = '';
    
    console.log(empData.employeeList.length);

    $scope.addEmp = function (first,last,dept)
    {
      var emp = {firstName: first, lastName:last, department:dept};
      empData.employeeList.push(emp);
    };

  }
);