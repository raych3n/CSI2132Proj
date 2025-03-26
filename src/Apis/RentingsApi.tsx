import axios from "axios";
import { Rent } from "../ehotel";

interface PostResponse {
    data: Rent;
}

interface GetAllResponse {
    data: Rent[];
}

interface DeleteResponse {
    response: string;
}

export const getAllRents = async () => {
    try {
        const data = await axios.get<GetAllResponse>(
            `https://localhost:7214/api/Rent/GetAllRentings`
        );
        return data;
    } catch (error) {
        console.log("RentingsApi getall error");
        return "RentingsApi getall error";
    }
};

export const addRent = async ({
    id,
    roomNum,
    hotelAddress,
    custId,
    empId,
    startDate,
    endDate,
    archived,
    paid,
}: {
    id: number;
    roomNum: number;
    hotelAddress: string;
    custId: string;
    empId: number;
    startDate: string;
    endDate: string;
    archived: boolean;
    paid: boolean;
}) => {
    try {
        const data = await axios.post<PostResponse>(
            `https://localhost:7214/api/Rent/Post?id=${id}&roomNum=${roomNum}&hotelAddress=${hotelAddress}&custId=${custId}&empId=${empId}&startDate=${startDate}&endDate=${endDate}&archived=${archived}&paid=${paid}`
        );
        return data;
    } catch (error) {
        console.log("RentingsApi post error");
        return "RentingsApi post Error";
    }
};

export const deleteRents = async (id: number) => {
    try {
        const response = await axios.delete<DeleteResponse>(
            `https://localhost:7214/api/Rent/Delete?id=${id}`
        );

        if (response.status == 204) {
            console.log(id, " Deleted");
            return "Success";
        }
    } catch (error) {
        console.log("RentingsApi Delete Error");
        return "RentingsApi Delete Error";
    }
};
