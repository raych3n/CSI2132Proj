import axios from "axios"
import { Hotel } from '../ehotel'

interface PostResponse {
    data: Hotel;
}

interface GetAllResponse {
    data: Hotel[]
}

interface DeleteResponse {
    response: string;
}

export const getAllHotel = async() => {
    try {
        const data = await axios.get<GetAllResponse>(
            `https://localhost:7214/api/Hotel/GetAllHotels`
        );
        return data
    } catch (error) {
        console.log("HotelApi getall error");
        return "HotelApi getall error"
    }
}

export const addHotel = async ({hotelAddress, chain, numRooms, area, category}:{
    hotelAddress: string;
        chain: string;
        numRooms: number;
        area: string;
        category: string;
}) => {
    try {
        const data = await axios.post<PostResponse>(
            `https://localhost:7214/api/Hotel/Post?address=${hotelAddress}&chain=${chain}&numRooms=${numRooms}&area=${area}&category=${category}`
        );
        return data;
    } catch (error) {
        console.log("HotelApi post error");
        return "HotelApi post Error";
    }
}

export const deleteHotel = async(hotelAddress: string) => {
    try {
        const response = await axios.delete<DeleteResponse>(`https://localhost:7214/api/Hotel/Delete?address=${hotelAddress}`);

        if (response.status == 204) {
            console.log(hotelAddress, " Deleted")
            return "Success"
        }
    } catch (error) {
        console.log("HotelApi Delete Error")
        return "HotelApi Delete Error"
    }
}