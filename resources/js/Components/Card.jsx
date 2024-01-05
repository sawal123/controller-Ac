import React from "react";
import { Link } from "@inertiajs/react";

function Card({ data, status, on }) {
    return (
        <div>
            {/* <Link> */}
                <div className="border rounded-lg  w-auto h-auto p-5 transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:shadow-lg">
                    <h4 className="text-lg font-bold">{data}</h4>
                    <div className="flex mt-3 gap-2">
                        Status :{" "}
                        <span className="bg-red-700 p-1 text-white rounded-lg">
                            {status}
                        </span>
                        <span className="bg-blue-500 p-1 text-white rounded-lg">
                            {on}
                        </span>
                    </div>
                </div>
            {/* </Link> */}
        </div>
    );
}
export default Card;
