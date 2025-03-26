import React from "react";
import { Rent, } from "../ehotel";

interface Props {
    id: number;
    rentings: Rent;
}

const RentingsView: React.FC<Props> = ({ rentings }: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 bg-blue-200 m-1">
            <ul>
                <li><b>ID:</b> {rentings.id}</li>
                <li><b>Hotel Address</b> {rentings.hotelAddress}</li>
                <li><b>Room Number:</b> {rentings.roomNum}</li>
                <li><b>Customer ID:</b> {rentings.custId}</li>
                <li><b>Start Date:</b> {rentings.startDate}</li>
                <li><b>End Date:</b> {rentings.endDate}</li>
                <li><b>Paid:</b> {rentings.paid ? "True" : "False"}</li>
                <li><b>Archived:</b> {rentings.archived ? "True" : "False"}</li>
            </ul>
        </div>
    );
};

export default RentingsView;
