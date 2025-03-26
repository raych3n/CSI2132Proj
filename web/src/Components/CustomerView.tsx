import React from "react";
import { Customer } from "../ehotel";

interface Props {
    id: string;
    customer: Customer;
}

const CustomerView: React.FC<Props> = ({ customer }: Props): JSX.Element => {
    return (
        <div className="border border-black rounded-lg p-1 bg-blue-200 m-1">
            <ul>
                <li><b>ID:</b> {customer.id}</li>
                <li><b>Name:</b> {customer.name}</li>
                <li><b>Address:</b> {customer.address}</li>
                <li><b>Registration Date:</b> {customer.registrationDate}</li>
            </ul>
        </div>
    );
};

export default CustomerView;
