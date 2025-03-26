import axios from "axios"
import { Booking } from '../ehotel'

interface PostResponse {
    data: Booking;
}

interface GetAllResponse {
    data: Booking[];
}

interface DeleteResponse {
    response: string;
}


export const getAllBooks = async () => {
    try {
        const data = await axios.get<GetAllResponse>(
            `https://localhost:7214/api/Book/GetAllBookings`
        );
        return data;
    } catch (error) {
        console.log("BookApi getall error");
        return "BookApi getall error";
    }
};

export const addBooks = async ({
    id,
    roomNum,
    hotelAddress,
    custId,
    startDate,
    endDate,
}: {
    id: number;
    roomNum: number;
    hotelAddress: string;
    custId: string;
    startDate: string;
    endDate: string;
}) => {
    try {
        const data = await axios.post<PostResponse>(
            `https://localhost:7214/api/Book/Post?id=${id}&custId=${custId}&roomNum=${roomNum}&hotelAddress=${hotelAddress}&startDate=${startDate}&endDate=${endDate}`
        );
        return data;
    } catch (error) {
        console.log("BooksingsApi post error");
        return "BooksingsApi post Error";
    }
};

export const deleteBook = async (id: number) => {
    try {
        const response = await axios.delete<DeleteResponse>(
            `https://localhost:7214/api/Book/Delete?id=${id}`
        );

        if (response.status == 204) {
            console.log(id, " Deleted");
            return "Success";
        } else if (response.status == 404) {
            console.log(id, " Not found")
            return "Not Found";
        } 
    } catch (error) {
        console.log("BookApi Delete Error");
        return "BookApi Delete Error";
    }
};

export const rentBook = async (id: number) => {
    try {
        const response = await axios.post<DeleteResponse> (
            `https://localhost:7214/api/Book/Rent?id=${id}`
        );

        if (response.status == 204) {
            console.log(id, " Deleted");
            return "Success";
        } else if (response.status == 404) {
            console.log(id, " Not found")
            return "Not Found";
        }
    } catch (error) {
        console.log("BookApi Rent Error");
        return "BookApi Rent Error";
    }
}