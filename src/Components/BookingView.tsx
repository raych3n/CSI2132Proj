import React from "react";
import { Booking } from "../ehotel";

interface Props {
    id: number;
    booking: Booking;
}

const BookingView: React.FC<Props> = ({ booking }: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 bg-blue-200 m-1">
            <ul>
                <li><b>ID:</b> {booking.id}</li>
                <li><b>Hotel Address</b> {booking.hotelAddress}</li>
                <li><b>Room Number:</b> {booking.roomNum}</li>
                <li><b>Customer ID:</b> {booking.custId}</li>
                <li><b>Start Date:</b> {booking.startDate}</li>
                <li><b>End Date:</b> {booking.endDate}</li>
                <li><b>Archived:</b> {booking.archived ? "True" : "False"}</li>
            </ul>
        </div>
    );
};

export default BookingView;
