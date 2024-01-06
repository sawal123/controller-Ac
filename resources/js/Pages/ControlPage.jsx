import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Card from "@/Components/Card";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Dashboard
            //     </h2>
            // }
        >
            <Head title="Controll Ac" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="p-4 flex justify-between border rounded-md">
                                <p>Ruangan 1</p>
                                <p>Status: Online</p>
                            </div>

                            <div className="flex justify-center mt-10 gap-3">
                                <div className="rounded-full transition-colors duration-300 hover:shadow-md ease-in-out hover:text-white hover:bg-red-700 p-5 border w-16 h-16 flex items-center justify-center cursor-pointer">
                                    <span className="text-xl font-bold">
                                        On
                                    </span>
                                </div>
                                <div className="rounded-full transition-colors duration-300 hover:shadow-md ease-in-out hover:text-white hover:bg-red-700  p-5 border w-16 h-16 flex items-center justify-center cursor-pointer">
                                    <span className="text-xl font-bold">1</span>
                                </div>
                                <div className="rounded-full transition-colors duration-300 hover:shadow-md ease-in-out hover:text-white hover:bg-red-700 p-5 border w-16 h-16 flex items-center justify-center cursor-pointer">
                                    <span className="text-xl font-bold">2</span>
                                </div>
                                <div className="rounded-full transition-colors duration-300 hover:shadow-md ease-in-out hover:text-white hover:bg-red-700 p-5 border w-16 h-16 flex items-center justify-center cursor-pointer">
                                    <span className="text-xl font-bold">3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
