import React, { SyntheticEvent } from "react";

interface Props {
    editCust: {
        id: string;
        name: string;
        address: string;
        registrationDate: string;
    };
    handleCustChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEdit: (e: SyntheticEvent) => void;
    handleDelete: (e: SyntheticEvent) => void;
}

const EditCustomer: React.FC<Props> = ({
    editCust,
    handleCustChange,
    handleEdit,
    handleDelete,
}: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 m-1 w-1/2">
            <b>Edit Customer </b>(If customer does not exist, they will be
            added)
            <form className="flex flex-col">
                <label>
                    ID:
                    <input
                        type="text"
                        placeholder="ID"
                        value={editCust.id || ""}
                        name="id"
                        onChange={handleCustChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Name:
                    <input
                        type="text"
                        placeholder="Name"
                        value={editCust.name || ""}
                        name="name"
                        onChange={handleCustChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        placeholder="Address"
                        value={editCust.address || ""}
                        name="address"
                        onChange={handleCustChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Date Of Registration:
                    <input
                        type="date"
                        value={editCust.registrationDate || ""}
                        name="registrationDate"
                        onChange={handleCustChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                    <br></br>
                    <p className="text-sm text-red-400">
                        *If not entered default to today
                    </p>
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

export default EditCustomer;
