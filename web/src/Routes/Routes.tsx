import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CustomersPage from "../Pages/CustomersPage";
import EmployeesPage from "../Pages/EmployeesPage";
import HotelsPage from "../Pages/HotelsPage";
import RoomsPage from "../Pages/RoomsPage";
import UserSearchPage from "../Pages/UserSearchPage";
import BookingPage from "../Pages/BookingPage";
import RentingsPage from "../Pages/RentingsPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {path: "Customers", element: <CustomersPage/>},
            {path: "Employees", element: <EmployeesPage/>},
            {path: "Hotels", element: <HotelsPage/>},
            {path: "Rooms", element: <RoomsPage/>},
            {path: "Booking", element: <BookingPage/>},
            {path: "Renting", element: <RentingsPage/>},
            {path: "", element: <UserSearchPage/>}
        ]
    }
]) 