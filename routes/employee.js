const employees = require("../controllers/employee");
const routes = require("express").Router();

routes.post("/addEmployee", employees.addEmployee);
routes.get("/findEmployees", employees.getEmployee);
routes.get("/findEmployeeById/:Id", employees.getEmployeeById);
routes.put("/updateEmployee/:Id", employees.updateEmployee);
routes.delete("/deleteEmployee/:Id", employees.deleteEmployee);


module.exports = routes;
