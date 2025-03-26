import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Customer } from "../ehotel";
import CustomerView from "./CustomerView";

interface Props {
    allCust: Customer[];
    handleGetAllCust: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const CustomerList: React.FC<Props> = ({
    allCust,
    handleGetAllCust,
}: Props): JSX.Element => {
    return (
        <div className="flex flex-col border border-black rounded-lg m-1 p-1">
            <button
                onClick={(e) => handleGetAllCust(e)}
                className="border border-black rounded-lg m-2 self-center p-1 bg-green-300 transition hover:bg-green-500 hover:translate-y-1"
            >
                Get all customers
            </button>
            {allCust.length > 0 ? (
                allCust.map((customer) => {
                    return (
                        <div className="self-center">
                            <CustomerView
                                id={customer.id}
                                key={uuidv4()}
                                customer={customer}
                            />
                        </div>
                    );
                })
            ) : (
                <h1>No result</h1>
            )}
        </div>
    );
};

export default CustomerList;
