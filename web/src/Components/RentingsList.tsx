import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Rent } from "../ehotel";
import RentingsView from "./RentingsView";

interface Props {
    allRents: Rent[];
    handleGetAllRents: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const RentingsList: React.FC<Props> = ({
    allRents,
    handleGetAllRents,
}: Props): JSX.Element => {
    return (
        <div className="flex flex-col border border-black rounded-lg m-1 p-1">
            <button
                onClick={(e) => handleGetAllRents(e)}
                className="border border-black rounded-lg m-2 self-center p-1 bg-green-300 transition hover:bg-green-500 hover:translate-y-1"
            >
                Get all Rentings
            </button>
            {allRents.length > 0 ? (
                allRents.map((rentings) => {
                    return (
                        <div className="self-center">
                            <RentingsView
                                id={rentings.id}
                                key={uuidv4()}
                                rentings={rentings}
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

export default RentingsList;
