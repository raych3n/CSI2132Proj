export interface Amenity {
    roomNum: number;
    hotelAddress: string;
    name: string;
}

export interface Booking {
    id: number;
    roomNum: number;
    hotelAddress: string;
    custId: string;
    startDate: string; 
    endDate: string; 
    archived: boolean;
}

export interface ChainEmail {
    name: string;
    email: string;
}

export interface ChainPhone {
    name: string;
    number: number;
}

export interface Customer {
    id: string;
    name: string;
    address: string;
    registrationDate: string;
}

export interface Employee {
    id: number;
    name: string;
    address: string;
    hotelAddress: string;
    isManager: boolean;
}

export interface Hotel {
    address: string;
    chain: string;
    category: number;
    numRooms: number;
    area: string;
}

export interface HotelChain {
    name: string;
    address: string;
    numHotels: number;
}

export interface Hotel_Email {
    address: string;
    email: string;
}

export interface Hotel_Phone {
    address: string;
    number: number;
}

export interface Rent {
    id: number;
    roomNum: number;
    hotelAddress: string;
    custId: string;
    empId: number;
    startDate: string;
    endDate: string;
    archived: boolean;
    paid: boolean;
}

export interface Role {
    empId: number;
    name: string;
}

export interface Room {
    roomNum: number;
    hotelAddress: string;
    price: number;
    capacity: number;
    view: string;
    extendable: boolean;
    problems: string;
}

export interface UserRoom {
    roomNum: number;
    hotelAddress: string;
    price: number;
    capacity: number;
    view: string;
    extendable: boolean;
    problems: string;
    hotelChain: string;
    area: string;
    category: number;
}

export interface RoomSearch {
    hotelAddress: string;
    startDate: string;
        endDate: string;
        capacity: string;
        hotelChain: string;
        area: string;
        category: string;
        numRooms: string;
        price: string;
}