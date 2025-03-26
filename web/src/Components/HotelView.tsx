import React from "react";
import { Hotel } from "../ehotel";

interface Props {
    id: string;
    hotel: Hotel;
}

const hotelView: React.FC<Props> = ({ hotel }: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 bg-blue-200 m-1">
            <ul>
                <li><b>Hotel Address:</b> {hotel.address}</li>
                <li><b>Hotel Chain:</b> {hotel.chain}</li>
                <li><b>Number of rooms:</b> {hotel.numRooms}</li>
                <li><b>Category:</b> {hotel.category}</li>
                <li><b>Area:</b> {hotel.area}</li>

            </ul>
        </div>
    );
};

export default hotelView;
