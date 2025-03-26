import axios from "axios"
import { Room, RoomSearch } from '../ehotel'

interface SearchResponse {
    data: Room[];
}

export const searchHotels = async ({startDate, endDate, capacity, hotelChain, category, numRooms, area, price}:{
        startDate: string,
        endDate: string,
        capacity: string,
        hotelChain: string,
        area: string,
        category: string,
        numRooms: string,
        price: string,
}) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://localhost:7214/api/Room/GetRoomSearch?startDate=${startDate}&endDate=${endDate}&capacity=${capacity}&hotelChain=${hotelChain}&category=${category}&numRooms=${numRooms}&area=${area}&price=${price}`
        );
        return data;
    } catch (error) {
        console.log("SearchApi error");
        return "SearchApi Error";
    }
}