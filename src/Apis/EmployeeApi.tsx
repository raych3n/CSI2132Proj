import axios from "axios"
import { Employee } from '../ehotel'

interface PostResponse {
    data: Employee;
}

interface GetAllResponse {
    data: Employee[]
}

interface DeleteResponse {
    response: string;
}

export const getAllEmp = async() => {
    try {
        const data = await axios.get<GetAllResponse>(
            `https://localhost:7214/api/Employee/GetAllEmployees`
        );
        return data
    } catch (error) {
        console.log("EmployeeApi getall error");
        return "EmployeeApi getall error"
    }
}

export const addEmp = async ({id, name, address, hotelAddress, isManager}:{
        id: number,
        name: string, 
        address: string,
        hotelAddress: string,
        isManager: boolean
}) => {
    try {
        const data = await axios.post<PostResponse>(
            `https://localhost:7214/api/Employee/Post?id=${id}&name=${name}&address=${address}&hotelAddress=${hotelAddress}&isManager=${isManager}`
        );
        return data;
    } catch (error) {
        console.log("EmployeeApi post error");
        return "EmployeeApi post Error";
    }
}

export const deleteEmp = async(id: number) => {
    try {
        const response = await axios.delete<DeleteResponse>(`https://localhost:7214/api/Employee/Delete?id=${id}`);

        if (response.status == 204) {
            console.log(id, " Deleted")
            return "Success"
        }
    } catch (error) {
        console.log("EmployeeApi Delete Error")
        return "EmployeeApi Delete Error"
    }
}