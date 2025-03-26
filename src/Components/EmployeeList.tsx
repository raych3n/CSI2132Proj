import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Employee } from "../ehotel";
import EmployeeView from "./EmployeeView";

interface Props {
    allEmp: Employee[];
    handleGetAllEmp: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const EmployeeList: React.FC<Props> = ({
    allEmp,
    handleGetAllEmp,
}: Props): JSX.Element => {
    return (
        <div className="flex flex-col border border-black rounded-lg m-1 p-1">
            <button
                onClick={(e) => handleGetAllEmp(e)}
                className="border border-black rounded-lg m-2 self-center p-1 bg-green-300 transition hover:bg-green-500 hover:translate-y-1"
            >
                Get all Employees
            </button>
            {allEmp.length > 0 ? (
                allEmp.map((employee) => {
                    return (
                        <div className="self-center">
                            <EmployeeView
                                id={employee.id}
                                key={uuidv4()}
                                employee={employee}
                            />
                        </div>
                    );
                })
            ) : (
                <h1>No result</h1>
            )}
        </div>
    );
};

export default EmployeeList;
