import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Card from "@/Components/Card";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";

export default function AddRuangan({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Ruangan
                </h2>
            }>
            <Head title="Add Ruangan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mx-auto max-w-md text-center">
                                <TextInput type="text" className="block mb-4 mx-auto w-full" placeholder="Nama Ruangan" />
                                <TextInput type="text"  className="block mb-4 mx-auto w-full" placeholder="Kode Ruangan"/>
                                <PrimaryButton children="Tambah Ruangan" className="w-full " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
