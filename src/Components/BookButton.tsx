import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import BookView from "./BookView";
import { Room } from "../ehotel";
interface Props {
    handleBookSubmit: (e: SyntheticEvent, room: Room) => void;
    handleBookChange: (e: ChangeEvent<HTMLInputElement>) => void;
    createBooking: {
        id: string;
        name: string;
        address: string;
    };
    booked: boolean;
    room: Room;
    bookIsOpen: boolean;
    handleBookCloseClick: (e: SyntheticEvent, open: boolean) => void;
}

const BookButton: React.FC<Props> = ({
    handleBookSubmit,
    handleBookChange,
    createBooking,
    booked,
    room,
    bookIsOpen,
    handleBookCloseClick,
}: Props): JSX.Element => {

    return (
        <div>
            <button
                className="border border-black rounded-lg mt-2 self-center w-1/2 p-1 bg-green-300 transition hover:bg-green-500"
                onClick={(e) => handleBookCloseClick(e, false)}
            >
                Book
            </button>

            {bookIsOpen && (
                <div className="z-50">
                    <div>
                        <BookView
                            handleBookSubmit={handleBookSubmit}
                            handleBookCloseClick={handleBookCloseClick}
                            handleBookChange={handleBookChange}
                            createBooking={createBooking}
                            booked={booked}
                            room={room}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookButton;
