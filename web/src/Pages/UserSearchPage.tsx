import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { searchHotels } from "../Apis/SearchApi";
import SearchList from "../Components/SearchList";
import Search from "../Components/Search";
import { Booking, Customer, Room, UserRoom } from "../ehotel";
import { registerCust } from "../Apis/CustomerApi";
import { addBooks } from "../Apis/BookApi";

interface Props {
}

const UserSearchPage = (props: Props) => {
    const [search, setSearch] = useState({
        startDate: "",
        endDate: "",
        capacity: "",
        hotelChain: "",
        area: "",
        category: "",
        numRooms: "",
        price: "",
    });
    const [createBooking, setCreateBooking] = useState({
        id: "",
        name: "",
        address: "",
    });
    var booked = false;
    const [searchResult, setSearchResult] = useState<UserRoom[]>([]);
    const [serverError, setServerError] = useState<string>("");
    const [bookIsOpen, setBookIsOpen] = useState<boolean>(false);
    
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSearch((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleBookChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCreateBooking((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await searchHotels(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setServerError("");
            setSearchResult(result.data);
        }
        console.log(searchResult);
    };
    const handleBookSubmit = async (event: SyntheticEvent, room: Room) => {
        event.preventDefault();
        var booking = {
            id: -1,
            custId: createBooking.id,
            roomNum: room.roomNum,
            hotelAddress: room.hotelAddress,
            startDate: search.startDate,
            endDate: search.endDate,
        };
        await registerCust({id: createBooking.id, name: createBooking.name, address: createBooking.address, registrationDate: ""});
        const bookingRes = await addBooks(booking);

        if (typeof bookingRes === "string") {
            setServerError(bookingRes);
        } else if (Array.isArray(bookingRes.data)) {
            setServerError("")
            booked = true;
        }
        setCreateBooking({ id: "", name: "", address: "" });
        console.log(searchResult);
    };
    const handleBookCloseClick = (e: SyntheticEvent, close: boolean) => {
        setCreateBooking({ id: "", name: "", address: "" });
        setBookIsOpen(!close);
    };
    return (
        <div className="flex flex-row">
            <Search
                handleSubmit={handleSubmit}
                handleSearchChange={handleSearchChange}
                search={search}
            />

            {serverError && <h1>Server Error</h1>}
            <SearchList
                searchResults={searchResult}
                handleBookSubmit={handleBookSubmit}
                createBooking={createBooking}
                handleBookChange={handleBookChange}
                booked={booked}
                handleBookCloseClick={handleBookCloseClick}
                bookIsOpen={bookIsOpen}
            />
        </div>
    );
};

export default UserSearchPage;
