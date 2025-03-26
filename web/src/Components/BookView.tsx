import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Room } from "../ehotel";

interface Props {
    handleBookSubmit: (e: SyntheticEvent, room: Room) => void;
    handleBookCloseClick: (e: SyntheticEvent, open: boolean) => void;
    handleBookChange: (e: ChangeEvent<HTMLInputElement>) => void;
    createBooking: {
        id: string;
        name: string;
        address: string;
    };
    booked: boolean;
    room: Room;
}

const BookView = ({
    handleBookSubmit,
    handleBookCloseClick,
    handleBookChange,
    createBooking,
    booked,
    room,
}: Props) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50"
            onClick={(e) => handleBookCloseClick(e, true)}
        >
            <div 
                className="fixed inset-x-0 max-w-max mx-auto top-1/4 border border-black bg-green-200 rounded-lg" 
                onClick={(e) => e.stopPropagation()}
            >
                <form
                    onSubmit={(e) => handleBookSubmit(e, room)}
                    className="flex flex-col items-center p-4"
                >
                    <div className="font-bold self-center mb-2">Book Room</div>

                    <label className="font-bold m-2 w-full">
                        ID:
                        <input
                            name="id"
                            type="text"
                            value={createBooking.id || ""}
                            className="rounded-lg ml-2 p-1 font-normal w-4/5"
                            onChange={handleBookChange}
                        />
                    </label>

                    <label className="font-bold m-2 w-full">
                        Name:
                        <input
                            name="name"
                            type="text"
                            value={createBooking.name || ""}
                            className="rounded-lg ml-2 p-1 font-normal w-4/5"
                            onChange={handleBookChange}
                        />
                    </label>

                    <label className="font-bold m-2 w-full">
                        Address:
                        <input
                            name="address"
                            type="text"
                            value={createBooking.address || ""}
                            className="rounded-lg ml-2 p-1 font-normal w-4/5"
                            onChange={handleBookChange}
                        />
                    </label>
                    <button
                        className="border border-black rounded-lg mt-2 self-center w-2/3 p-1 bg-green-300 transition hover:bg-green-500 m-1"
                        type="submit"
                    >
                        Book
                    </button>
                    <button
                        className="border border-black rounded-lg mt-2 self-center w-2/3 p-1 bg-green-300 transition hover:bg-green-500 m-1"
                        onClick={(e) => {
                            handleBookCloseClick(e, true);
                        }}
                    >
                        Close
                    </button>
                    {booked && (
                        <div className="text-green-600">Room Booked!</div>
                    )}
                </form>
            </div>
        </div>
    );
};
export default BookView;
