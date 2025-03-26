import React, { ChangeEvent, FormEvent, JSX, SyntheticEvent } from "react";
import "./HotelView";
import { Room, UserRoom } from "../ehotel";
import BookButton from "./BookButton";

interface Props {
    id: string;
    room: UserRoom;
    handleBookSubmit: (e: SyntheticEvent, room: Room) => void;
    handleBookChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBookCloseClick: (e: SyntheticEvent, open: boolean) => void;
    createBooking: {
        id: string;
        name: string;
        address: string;
    };
    booked: boolean;
    bookIsOpen: boolean;
}

const SearchView: React.FC<Props> = ({
    room,
    handleBookSubmit,
    handleBookChange,
    createBooking,
    booked,
    handleBookCloseClick,
    bookIsOpen,
}: Props): JSX.Element => {
    return (
        <div className="shadow-md shadow-black m-2 p-2 bg-blue-50">
            <div>
                <b>Room Num:</b> {room.roomNum}
            </div>
            <div>
                <b>Hotel Chain:</b> {room.hotelChain}
            </div>
            <div>
                <b>Area:</b> {room.area}
            </div>
            <div>
                <b>Hotel Address:</b> {room.hotelAddress}
            </div>
            <div>
                <b>Category:</b> {room.category}
            </div>
            <div>
                <b>Price:</b> {room.price}
            </div>
            <div>
                <b>Capacity:</b> {room.capacity}
            </div>
            <div>
                <b>View:</b>{" "}
                {room.view.replace(/^./, (char) => char.toUpperCase())}
            </div>
            <div>
                <b>Extendable:</b> {room.extendable ? "Yes" : "No"}
            </div>
            <div>
                <b>Problems:</b> {room.problems ? room.problems : "N/A"}
            </div>
            <BookButton
                handleBookSubmit={handleBookSubmit}
                createBooking={createBooking}
                handleBookChange={handleBookChange}
                handleBookCloseClick={handleBookCloseClick}
                bookIsOpen={bookIsOpen}
                booked={booked}
                room={room}
            />
        </div>
    );
};

export default SearchView;
