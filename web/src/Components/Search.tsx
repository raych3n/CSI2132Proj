import React, { ChangeEvent, FormEvent, JSX } from "react";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    search: {
        startDate: string;
        endDate: string;
        capacity: string;
        hotelChain: string;
        area: string;
        category: string;
        numRooms: string;
        price: string;
    };
}

const Search: React.FC<Props> = ({
    handleSubmit,
    handleSearchChange: handleChange,
    search,
}: Props): JSX.Element => {
    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="border border-black flex justify-left flex-col p-10 w-1/4 bg-yellow-50 h-1/2"
        >
            <label className="m-2 font-bold">
                Start Date:
                <input
                    className="border border-black rounded-lg ml-2 p-1 font-normal"
                    type="date"
                    name="startDate"
                    value={search.startDate || ""}
                    onChange={handleChange}
                />
            </label>

            <label className="m-2 font-bold">
                End Date:
                <input
                    className="border border-black rounded-lg ml-2 p-1 font-normal"
                    type="date"
                    name="endDate"
                    value={search.endDate || ""}
                    onChange={handleChange}
                />
            </label>
            <fieldset className="border border-black w-2/3 pb-1 flex justify-center items-center rounded-lg font-bold bg-white">
                <legend>Room Capacity</legend>
                <label className="pr-2 pb-1 font-normal">
                    <input
                        className="mr-1"
                        type="radio"
                        name="capacity"
                        value="2"
                        checked={search.capacity === "2"}
                        onChange={(e) => handleChange(e)}
                    />
                    2
                </label>
                <label className="px-2 pb-1 font-normal">
                    <input
                        className="mr-1"
                        type="radio"
                        name="capacity"
                        value="3"
                        checked={search.capacity === "3"}
                        onChange={(e) => handleChange(e)}
                    />
                    3
                </label>
                <label className="pl-2 pb-1 font-normal">
                    <input
                        className="mr-1"
                        type="radio"
                        name="capacity"
                        value="4"
                        checked={search.capacity === "4"}
                        onChange={(e) => handleChange(e)}
                    />
                    4
                </label>
            </fieldset>
            <label className="mt-4 mb-2 font-bold">
                Hotel Chain:
                <input
                    className="border border-black rounded ml-2 p-1 font-normal w-1/2"
                    type="text"
                    name="hotelChain"
                    value={search.hotelChain || ""}
                    onChange={(e) => handleChange(e)}
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
                        checked={search.category === "1"}
                        onChange={(e) => handleChange(e)}
                    />
                    1
                </label>
                <label className="font-normal px-1">
                    <input
                        className="mr-1"
                        type="radio"
                        name="category"
                        value="2"
                        checked={search.category === "2"}
                        onChange={(e) => handleChange(e)}
                    />
                    2
                </label>
                <label className="font-normal px-1">
                    <input
                        className="mr-1"
                        type="radio"
                        name="category"
                        value="3"
                        checked={search.category === "3"}
                        onChange={(e) => handleChange(e)}
                    />
                    3
                </label>
                <label className="font-normal px-1">
                    <input
                        className="mr-1"
                        type="radio"
                        name="category"
                        value="4"
                        checked={search.category === "4"}
                        onChange={(e) => handleChange(e)}
                    />
                    4
                </label>
                <label className="font-normal pl-1">
                    <input
                        className="mr-1"
                        type="radio"
                        name="category"
                        value="5"
                        checked={search.category === "5"}
                        onChange={(e) => handleChange(e)}
                    />
                    5
                </label>
            </fieldset>
            <fieldset className="border border-black rounded-lg font-bold mt-2 px-1.5 pt-1 pb-3 flex justify-center w-2/3 bg-white">
                <legend>Number of Rooms:</legend>
                <label className="font-normal pr-2">
                    <input
                        className="mr-1"
                        type="radio"
                        name="numRooms"
                        value="3"
                        checked={search.numRooms === "3"}
                        onChange={(e) => handleChange(e)}
                    ></input>
                    3
                </label>
                <label className="font-normal px-2">
                    <input
                        className="mr-1"
                        type="radio"
                        name="numRooms"
                        value="4"
                        checked={search.numRooms === "4"}
                        onChange={(e) => handleChange(e)}
                    ></input>
                    4
                </label>
                <label className="font-normal pl-2">
                    <input
                        className="mr-1"
                        type="radio"
                        name="numRooms"
                        value="5"
                        checked={search.numRooms === "5"}
                        onChange={(e) => handleChange(e)}
                    ></input>
                    5
                </label>
            </fieldset>
            <label className="mt-2 p-2 font-bold">
                Area:
                <input
                    className="font-normal border border-black rounded-md ml-2 p-1"
                    type="text"
                    name="area"
                    value={search.area || ""}
                    onChange={(e) => handleChange(e)}
                ></input>
            </label>
            <label className="p-2 font-bold">
                Price:
                <input
                    className="font-normal border border-black rounded-md ml-2 p-1"
                    type="text"
                    name="price"
                    value={search.price || ""}
                    onChange={(e) => handleChange(e)}
                ></input>
            </label>
            <button
                type="submit"
                className="border border-black rounded-lg mt-2 self-center w-1/2 p-1 bg-green-300 transition hover:bg-green-500 hover:translate-y-1"
            >
                Submit
            </button>
        </form>
    );
};

export default Search;
