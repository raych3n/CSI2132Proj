import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Employee } from "../ehotel";
import EmployeeList from "../Components/EmployeeList";
import EditEmployee from "../Components/EditEmployee";
import { deleteEmp, getAllEmp, addEmp } from "../Apis/EmployeeApi";

interface Props {}

const EmployeesPage = (props: Props) => {
    const [serverError, setServerError] = useState<string>("");
    const [allEmp, setAllEmp] = useState<Employee[]>([]);
    const [editEmp, setEditEmp] = useState({
        id: 0,
        name: "",
        address: "",
        hotelAddress: "",
        isManager: false,
    });

    const handleEmpChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setEditEmp((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await addEmp(editEmp);

        if (typeof result === "string") {
            setServerError(result);
            console.log("Error");
        } else {
            setServerError("");
            setEditEmp({
                id: 0,
                name: "",
                address: "",
                hotelAddress: "",
                isManager: false,
            });
            console.log("Posted");
        }
    };

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await deleteEmp(editEmp.id);

        if (result != "Success") {
            setServerError("Error");
            console.log("Error");
        } else {
            setServerError("");
            setEditEmp({
                id: 0,
                name: "",
                address: "",
                hotelAddress: "",
                isManager: false,
            });
            console.log("Deleted");
        }
    };

    const handleGetAllEmp = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const result = await getAllEmp();
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setServerError("");
            setAllEmp(result.data);
        }
        console.log(allEmp);
    };
    return (
        <div className="grid w-screen grid-cols-3">
            {serverError && <h1>Server Error</h1>}
            <div className="col-span-1">
                <EmployeeList
                    allEmp={allEmp}
                    handleGetAllEmp={handleGetAllEmp}
                />
            </div>

            <div className="col-span-2">
                <EditEmployee
                    editEmp={editEmp}
                    handleEmpChange={handleEmpChange}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default EmployeesPage;
