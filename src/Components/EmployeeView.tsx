import React from "react";
import { Employee } from "../ehotel";

interface Props {
    id: number;
    employee: Employee;
}

const EmployeeView: React.FC<Props> = ({ employee }: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 bg-blue-200 m-1">
            <ul>
                <li><b>ID:</b> {employee.id}</li>
                <li><b>Name:</b> {employee.name}</li>
                <li><b>Address:</b> {employee.address}</li>
                <li><b>Hotel Address:</b> {employee.hotelAddress}</li>
                <li><b>Is Manager:</b> {employee.isManager?"true":"false"}</li>
            </ul>
        </div>
    );
};

export default EmployeeView;
