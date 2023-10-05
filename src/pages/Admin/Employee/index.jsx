import Data from "./Data";
import EmployeeHead from "./EmployeeHead";
import './employee.scss'

function EmployeePage(){
    return <div className="employee-container">
        <EmployeeHead />
        <Data />
    </div>
}
export default EmployeePage;