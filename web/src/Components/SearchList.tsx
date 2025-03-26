import React, { ChangeEvent, FormEvent, JSX, SyntheticEvent } from "react";
import SearchView from "./SearchView";
import { Room, UserRoom } from "../ehotel";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: UserRoom[];
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

const SearchList: React.FC<Props> = ({
    searchResults,
    handleBookSubmit,
    handleBookChange,
    createBooking,
    booked,
    handleBookCloseClick,
    bookIsOpen,
}: Props): JSX.Element => {
    return (
        <div className="grid grid-cols-3 gap-1">
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <div className="col-span-1">
                            <SearchView
                                id={result.hotelAddress + result.roomNum}
                                key={uuidv4()}
                                room={result}
                                handleBookSubmit={handleBookSubmit}
                                handleBookChange={handleBookChange}
                                handleBookCloseClick={handleBookCloseClick}
                                bookIsOpen={bookIsOpen}
                                createBooking={createBooking}
                                booked={booked}
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

export default SearchList;
