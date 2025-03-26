import React, { SyntheticEvent } from "react";

interface Props {
    editEmp: {
        id: number;
        name: string;
        address: string;
        hotelAddress: string;
        isManager: boolean;
    };
    handleEmpChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEdit: (e: SyntheticEvent) => void;
    handleDelete: (e: SyntheticEvent) => void;
}

const EditEmployee: React.FC<Props> = ({
    editEmp,
    handleEmpChange,
    handleEdit,
    handleDelete,
}: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 m-1 w-1/2">
            <b>Edit Employee </b>(If Employee does not exist, they will be
            added)
            <form className="flex flex-col">
                <label>
                    ID:
                    <input
                        type="text"
                        placeholder="ID"
                        value={editEmp.id || ""}
                        name="id"
                        onChange={handleEmpChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Name:
                    <input
                        type="text"
                        placeholder="Name"
                        value={editEmp.name || ""}
                        name="name"
                        onChange={handleEmpChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        placeholder="Address"
                        value={editEmp.address || ""}
                        name="address"
                        onChange={handleEmpChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Hotel Address:
                    <input
                        type="text"
                        placeholder="Hotel Address"
                        value={editEmp.hotelAddress || ""}
                        name="hotelAddress"
                        onChange={handleEmpChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Is Manager:
                    <input
                        type="checkbox"
                        checked={editEmp.isManager}
                        name="isManager"
                        onChange={(e) => handleEmpChange(e)}
                        className="ml-2"
                    ></input>
                </label>
                <button
                    onClick={(e) => handleEdit(e)}
                    className="border border-black rounded-lg mt-2 self-center w-1/2 p-1 bg-green-300 transition hover:bg-green-500"
                >
                    Edit
                </button>
                <button
                    onClick={(e) => handleDelete(e)}
                    className="border border-black rounded-lg mt-2 self-center w-1/2 p-1 bg-green-300 transition hover:bg-green-500"
                >
                    Delete
                </button>
            </form>
        </div>
    );
};

export default EditEmployee;
