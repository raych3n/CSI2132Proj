import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { deleteRents, getAllRents, addRent } from "../Apis/RentingsApi";
import { Rent } from "../ehotel";
import RentingsList from "../Components/RentingsList";
import EditRentings from "../Components/EditRentings";

interface Props {}

const RentingsPage = (props: Props) => {
    const [serverError, setServerError] = useState<string>("");
    const [allRents, setAllRents] = useState<Rent[]>([]);
    const [editRents, setEditRents] = useState({
        id: -1,
        roomNum: -1,
        hotelAddress: "",
        custId: "",
        empId: -1,
        startDate: "",
        endDate: "",
        archived: false,
        paid: false,
    });

    const handleRentsChange = (event: ChangeEvent<HTMLInputElement>) => {
            const target = event.target;
            const name = target.name;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            setEditRents((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

    const handleEdit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await addRent(editRents);

        if (typeof result === "string") {
            setServerError(result);
            console.log("Error");
        } else {
            setServerError("");
            setEditRents({
                id: -1,
                roomNum: -1,
                hotelAddress: "",
                custId: "",
                empId: -1,
                startDate: "",
                endDate: "",
                archived: false,
                paid: false,
            });
            console.log("Posted");
        }
    };

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await deleteRents(editRents.id);

        if (result != "Success") {
            setServerError("Error");
            console.log("Error");
        } else {
            setServerError("");
            setEditRents({
                id: -1,
                roomNum: -1,
                hotelAddress: "",
                custId: "",
                empId: -1,
                startDate: "",
                endDate: "",
                archived: false,
                paid: false,
            });
            console.log("Deleted")
        }
    };
            
    const handleGetAllRents = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const result = await getAllRents();
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setServerError("");
            setAllRents(result.data);
        }
        console.log(allRents);
    };
    return (
        <div className="grid w-screen grid-cols-3">
            {serverError && <h1>Server Error</h1>}
            <div className="col-span-1">
                <RentingsList
                    allRents={allRents}
                    handleGetAllRents={handleGetAllRents}
                />
            </div>

            <div className="col-span-2">
                <EditRentings
                    editRents={editRents}
                    handleRentsChange={handleRentsChange}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default RentingsPage;
