import React, { SyntheticEvent } from "react";

interface Props {
    editBooks: {
        id: number;
        roomNum: number;
        hotelAddress: string;
        custId: string;
        startDate: string;
        endDate: string;
        archived: boolean;
    };
    handleBooksChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEdit: (e: SyntheticEvent) => void;
    handleDelete: (e: SyntheticEvent) => void;
    handleRent: (e: SyntheticEvent) => void;
}

const EditBooking: React.FC<Props> = ({
    editBooks,
    handleBooksChange,
    handleEdit,
    handleDelete,
    handleRent,
}: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 m-1 w-1/2">
            <b>Edit Booking </b>(If Booking does not
            exist, they will be added)
            <form className="flex flex-col">
                <label>
                    ID:
                    <input
                        type="text"
                        placeholder="ID"
                        value={editBooks.id == -1 ? "" : editBooks.id}
                        name="id"
                        onChange={handleBooksChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Room Num:
                    <input
                        type="number"
                        min={0}
                        placeholder="Room Number"
                        value={(editBooks.roomNum != -1 && editBooks.roomNum)  || ""}
                        name="roomNum"
                        onChange={handleBooksChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Hotel Address:
                    <input
                        type="text"
                        placeholder="Hotel Address"
                        value={editBooks.hotelAddress || ""}
                        name="hotelAddress"
                        onChange={handleBooksChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Customer ID:
                    <input
                        type="text"
                        placeholder="Customer ID"
                        value={editBooks.custId || ""}
                        name="custId"
                        onChange={handleBooksChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Start Date:
                    <input
                        type="date"
                        value={editBooks.startDate || ""}
                        name="startDate"
                        onChange={handleBooksChange}
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
                        value={editBooks.endDate || ""}
                        name="endDate"
                        onChange={handleBooksChange}
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
                    onClick={(e) => handleRent(e)}
                    className="border border-black rounded-lg mt-2 self-center w-1/2 p-1 bg-green-300 transition hover:bg-green-500"
                >
                    Rent
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

export default EditBooking;
