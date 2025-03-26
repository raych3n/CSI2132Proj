import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { getAllBooks, addBooks, deleteBook, rentBook } from "../Apis/BookApi";
import { Booking } from "../ehotel";
import BookingsList from "../Components/BookingList";
import EditBookings from "../Components/EditBooking";

interface Props {}

const BookingPage = (props: Props) => {
    const [serverError, setServerError] = useState<string>("");
    const [allBooks, setAllBooks] = useState<Booking[]>([]);
    const [editBooks, setEditBooks] = useState({
        id: -1,
        roomNum: -1,
        hotelAddress: "",
        custId: "",
        startDate: "",
        endDate: "",
        archived: false,
    });

    const handleBooksChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditBooks((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await addBooks(editBooks);

        if (typeof result === "string") {
            setServerError(result);
            console.log("Error");
        } else {
            setServerError("");
            setEditBooks({
                id: -1,
                roomNum: -1,
                hotelAddress: "",
                custId: "",
                startDate: "",
                endDate: "",
                archived: false,
            });
            console.log("Posted");
        }
    };

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await deleteBook(editBooks.id);

        if (result != "Success") {
            setServerError("Error");
            console.log("Error");
        } else {
            setServerError("");
            setEditBooks({
                id: -1,
                roomNum: -1,
                hotelAddress: "",
                custId: "",
                startDate: "",
                endDate: "",
                archived: false,
            });
            console.log("Deleted");
        }
    };

    const handleGetAllBooks = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const result = await getAllBooks();
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setServerError("");
            setAllBooks(result.data);
        }
        console.log(allBooks);
    };

    const handleRent = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await rentBook(editBooks.id);
        if (result != "Success") {
            setServerError("Error");
            console.log("Error");
        } else {
            setServerError("");
            setEditBooks({
                id: -1,
                roomNum: -1,
                hotelAddress: "",
                custId: "",
                startDate: "",
                endDate: "",
                archived: false,
            });
            console.log("Rented");
        }
    };
    return (
        <div className="grid w-screen grid-cols-3">
            {serverError && <h1>Server Error</h1>}
            <div className="col-span-1">
                <BookingsList
                    allBooking={allBooks}
                    handleGetAllBookings={handleGetAllBooks}
                />
            </div>

            <div className="col-span-2">
                <EditBookings
                    handleRent={handleRent}
                    editBooks={editBooks}
                    handleBooksChange={handleBooksChange}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default BookingPage;
