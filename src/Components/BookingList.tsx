import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Booking } from "../ehotel";
import BookingView from "./BookingView";

interface Props {
    allBooking: Booking[];
    handleGetAllBookings: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const BookingList: React.FC<Props> = ({
    allBooking,
    handleGetAllBookings,
}: Props): JSX.Element => {
    return (
        <div className="flex flex-col border border-black rounded-lg m-1 p-1">
            <button
                onClick={(e) => handleGetAllBookings(e)}
                className="border border-black rounded-lg m-2 self-center p-1 bg-green-300 transition hover:bg-green-500 hover:translate-y-1"
            >
                Get all Bookings
            </button>
            {allBooking.length > 0 ? (
                allBooking.map((booking) => {
                    return (
                        <div className="self-center">
                            <BookingView
                                id={booking.id}
                                key={uuidv4()}
                                booking={booking}
                            />
                        </div>
                    );
                })
            ) : (
                <h1>No result</h1>
            )}
        </div>
    );
};

export default BookingList;
