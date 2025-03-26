import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { deleteCust, getAllCust, registerCust } from "../Apis/CustomerApi";
import { Customer } from "../ehotel";
import CustomerList from "../Components/CustomerList";
import EditCustomer from "../Components/EditCustomer";

interface Props {}

const CustomersPage = (props: Props) => {
    const [serverError, setServerError] = useState<string>("");
    const [allCust, setAllCust] = useState<Customer[]>([]);
    const [editCust, setEditCust] = useState({
        id: "",
        name: "",
        address: "",
        registrationDate: "",
    });

    const handleCustChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditCust((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = async (
        event: SyntheticEvent
    ) => {
        event.preventDefault();
        const result = await registerCust(editCust);

        if (typeof result === "string") {
            setServerError(result);
            console.log("Error")
        } else {
            setServerError("");
            setEditCust({
                id: "",
                name: "",
                address: "",
                registrationDate: "",
            });
            console.log("Posted")
        }
    };

    const handleDelete = async (
        event: SyntheticEvent
    ) => {
        event.preventDefault();
        const result = await deleteCust(editCust.id);

        if (result != "Success") {
            setServerError("Error");
            console.log("Error")
        } else {
            setServerError("");
            setEditCust({
                id: "",
                name: "",
                address: "",
                registrationDate: "",
            });
            console.log("Deleted")
        }
    };

    const handleGetAllCust = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const result = await getAllCust();
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setServerError("");
            setAllCust(result.data);
        }
        console.log(allCust);
    };
    return (
        <div className="grid w-screen grid-cols-3">
            {serverError && <h1>Server Error</h1>}
            <div className="col-span-1">
                <CustomerList
                    allCust={allCust}
                    handleGetAllCust={handleGetAllCust}
                />
            </div>

            <div className="col-span-2">
                <EditCustomer
                    editCust={editCust}
                    handleCustChange={handleCustChange}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default CustomersPage;
