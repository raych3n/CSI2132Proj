import React, { SyntheticEvent } from "react";

interface Props {
    editRents: {
        id: number;
        roomNum: number;
        hotelAddress: string;
        custId: string;
        empId: number;
        startDate: string;
        endDate: string;
        archived: boolean;
        paid: boolean;
    };
    handleRentsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEdit: (e: SyntheticEvent) => void;
    handleDelete: (e: SyntheticEvent) => void;
}

const EditRentings: React.FC<Props> = ({
    editRents,
    handleRentsChange,
    handleEdit,
    handleDelete,
}: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 m-1 w-1/2">
            <b>Edit Rentings </b>(If Rentings does not
            exist, they will be added)
            <form className="flex flex-col">
                <label>
                    ID:
                    <input
                        type="text"
                        placeholder="ID"
                        value={editRents.id == -1 ? "" : editRents.id}
                        name="id"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Room Num:
                    <input
                        type="number"
                        min={0}
                        placeholder="Room Number"
                        value={editRents.roomNum == -1 ? "" : editRents.roomNum}
                        name="roomNum"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Hotel Address:
                    <input
                        type="text"
                        placeholder="Hotel Address"
                        value={editRents.hotelAddress || ""}
                        name="hotelAddress"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Customer ID:
                    <input
                        type="text"
                        placeholder="Customer ID"
                        value={editRents.custId || ""}
                        name="custId"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Employee ID:
                    <input
                        type="text"
                        placeholder="Employee ID"
                        value={editRents.empId == -1 ? "" : editRents.empId}
                        name="empId"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Start Date:
                    <input
                        type="date"
                        value={editRents.startDate || ""}
                        name="startDate"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                    <br></br>
                    <p className="text-sm text-red-400">
                        *If not entered default to today
                    </p>
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        value={editRents.endDate || ""}
                        name="endDate"
                        onChange={handleRentsChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                    <br></br>
                    <p className="text-sm text-red-400">
                        *If not entered default to today
                    </p>
                </label>
                <label>
                    Paid:
                    <input
                        type="checkbox"
                        checked={editRents.paid}
                        name="paid"
                        onChange={(e) => handleRentsChange(e)}
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
                    Archive
                </button>
            </form>
        </div>
    );
};

export default EditRentings;
