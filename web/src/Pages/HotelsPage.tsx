import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Hotel } from "../ehotel";
import HotelList from "../Components/HotelList";
import EditHotel from "../Components/EditHotel";
import { deleteHotel, getAllHotel, addHotel } from "../Apis/HotelApi";

interface Props {}

const HotelsPage = (props: Props) => {
    const [serverError, setServerError] = useState<string>("");
    const [allHotel, setAllHotel] = useState<Hotel[]>([]);
    const [editHotel, setEditHotel] = useState({
        hotelAddress: "",
        chain: "",
        numRooms: -1,
        category: "",
        area: "",
    });

    const handleHotelChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditHotel((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await addHotel(editHotel);

        if (typeof result === "string") {
            setServerError(result);
            console.log("Error");
        } else {
            setServerError("");
            setEditHotel({
                hotelAddress: "",
                chain: "",
                numRooms: -1,
                category: "",
                area: "",
            });
            console.log("Posted");
        }
    };

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await deleteHotel(editHotel.hotelAddress);

        if (result != "Success") {
            setServerError("Error");
            console.log("Error");
        } else {
            setServerError("");
            setEditHotel({
                hotelAddress: "",
                chain: "",
                numRooms: -1,
                category: "",
                area: "",
            });
            console.log("Deleted");
        }
    };

    const handleGetAllHotel = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const result = await getAllHotel();
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setServerError("");
            setAllHotel(result.data);
        }
        console.log(allHotel);
    };
    return (
        <div className="grid w-screen grid-cols-3">
            {serverError && <h1>Server Error</h1>}
            <div className="col-span-1">
                <HotelList
                    allHotel={allHotel}
                    handleGetAllHotel={handleGetAllHotel}
                />
            </div>

            <div className="col-span-2">
                <EditHotel
                    editHotel={editHotel}
                    handleHotelChange={handleHotelChange}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default HotelsPage;
