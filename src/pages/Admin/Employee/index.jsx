import './employee.scss';
import Data from './Data';
import EmployeeHead from './EmployeeHead';

function EmployeePage() {
    return (
        <div className="employee-container">
            <EmployeeHead />
            <Data />
        </div>
    );
}
export default EmployeePage;
