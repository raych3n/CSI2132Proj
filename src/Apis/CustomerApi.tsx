import axios from "axios"
import { Customer } from '../ehotel'

interface PostResponse {
    data: Customer;
}

interface GetAllResponse {
    data: Customer[]
}

interface DeleteResponse {
    response: string;
}

export const getAllCust = async() => {
    try {
        const data = await axios.get<GetAllResponse>(
            `https://localhost:7214/api/Customer/GetAllCustomers`
        );
        return data
    } catch (error) {
        console.log("CustomerApi getall error");
        return "CustomerApi getall error"
    }
}

export const registerCust = async ({id, name, address, registrationDate}:{
        id: string,
        name: string, 
        address: string,
        registrationDate: string,
}) => {
    try {
        const data = await axios.post<PostResponse>(
            `https://localhost:7214/api/Customer/Post?id=${id}&name=${name}&address=${address}&registrationDate=${registrationDate}`
        );
        return data;
    } catch (error) {
        console.log("CustomerApi post error");
        return "CustomerApi post Error";
    }
}

export const deleteCust = async(id: string) => {
    try {
        const response = await axios.delete<DeleteResponse>(`https://localhost:7214/api/Customer/Delete?id=${id}`);

        if (response.status == 204) {
            console.log(id, " Deleted")
            return "Success"
        }
    } catch (error) {
        console.log("CustomerApi Delete Error")
        return "CustomerApi Delete Error"
    }
}