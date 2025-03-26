import React, { SyntheticEvent } from "react";

interface Props {
    editHotel: {
        hotelAddress: string;
        chain: string;
        numRooms: number;
        area: string;
        category: string;
    };
    handleHotelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEdit: (e: SyntheticEvent) => void;
    handleDelete: (e: SyntheticEvent) => void;
}

const EditHotel: React.FC<Props> = ({
    editHotel,
    handleHotelChange,
    handleEdit,
    handleDelete,
}: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 m-1 w-1/2">
            <b>Edit Hotel </b>(If Hotel does not exist, they will be added)
            <form className="flex flex-col">
                <label>
                    Hotel Address:
                    <input
                        type="text"
                        placeholder="Hotel Address"
                        value={editHotel.hotelAddress || ""}
                        name="hotelAddress"
                        onChange={handleHotelChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Hotel Chain:
                    <input
                        type="text"
                        placeholder="Hotel Chain"
                        value={editHotel.chain || ""}
                        name="chain"
                        onChange={handleHotelChange}
                        className="border border-black rounded-lg ml-1 w-1/3 p-1 m-1"
                    ></input>
                </label>
                <label>
                    Number of Rooms:
                    <input
                        type="number"
                        min={0}
                        placeholder="Number of Rooms"
                        value={editHotel.numRooms > 0 ? editHotel.numRooms : ""}
                        name="numRooms"
                        onChange={handleHotelChange}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
                    ></input>
                </label>
                <fieldset className="border border-black rounded-lg font-bold px-3 pt-1 pb-3 w-2/3 flex justify-center bg-white">
                    <legend>Categories</legend>
                    <label className="font-normal pr-1">
                        <input
                            className="mr-1"
                            type="radio"
                            name="category"
                            value="1"
                            checked={editHotel.category === "1"}
                            onChange={(e) => handleHotelChange(e)}
                        />
                        1
                    </label>
                    <label className="font-normal px-1">
                        <input
                            className="mr-1"
                            type="radio"
                            name="category"
                            value="2"
                            checked={editHotel.category === "2"}
                            onChange={(e) => handleHotelChange(e)}
                        />
                        2
                    </label>
                    <label className="font-normal px-1">
                        <input
                            className="mr-1"
                            type="radio"
                            name="category"
                            value="3"
                            checked={editHotel.category === "3"}
                            onChange={(e) => handleHotelChange(e)}
                        />
                        3
                    </label>
                    <label className="font-normal px-1">
                        <input
                            className="mr-1"
                            type="radio"
                            name="category"
                            value="4"
                            checked={editHotel.category === "4"}
                            onChange={(e) => handleHotelChange(e)}
                        />
                        4
                    </label>
                    <label className="font-normal pl-1">
                        <input
                            className="mr-1"
                            type="radio"
                            name="category"
                            value="5"
                            checked={editHotel.category === "5"}
                            onChange={(e) => handleHotelChange(e)}
                        />
                        5
                    </label>
                </fieldset>
                <label>
                    Area:
                    <input
                        type="text"
                        value={editHotel.area || ""}
                        name="area"
                        onChange={(e) => handleHotelChange(e)}
                        className="border border-black rounded-lg ml-1 w-1/2 p-1 m-1"
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

export default EditHotel;
