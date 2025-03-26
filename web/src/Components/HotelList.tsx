import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Hotel } from "../ehotel";
import HotelView from "./HotelView";

interface Props {
    allHotel: Hotel[];
    handleGetAllHotel: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const HotelList: React.FC<Props> = ({
    allHotel: allHotels,
    handleGetAllHotel,
}: Props): JSX.Element => {
    return (
        <div className="flex flex-col border border-black rounded-lg m-1 p-1">
            <button
                onClick={(e) => handleGetAllHotel(e)}
                className="border border-black rounded-lg m-2 self-center p-1 bg-green-300 transition hover:bg-green-500 hover:translate-y-1"
            >
                Get all Hotels
            </button>
            {allHotels.length > 0 ? (
                allHotels.map((hotel) => {
                    return (
                        <div className="self-center">
                            <HotelView
                                id={hotel.address}
                                key={uuidv4()}
                                hotel={hotel}
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

export default HotelList;
