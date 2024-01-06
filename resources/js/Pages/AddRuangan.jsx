import {useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Card from "@/Components/Card";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";

export default function AddRuangan({ auth }) {
    const {data, post, processing, setData } = useForm({
        nama: "",
        kode: "",
    });
   

    const submit = (e) => {
        e.preventDefault();
        post(route("dashboard.submitAdd"));
        setData({
            nama: "",
            kode: ""
        })
      
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Ruangan
                </h2>
            }
        >
            <Head title="Add Ruangan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mx-auto max-w-md text-center">
                                <form onSubmit={submit}>
                                    <TextInput
                                        type="text"
                                        className="block mb-4 mx-auto w-full"
                                        placeholder="Nama Ruangan"
                                        name="nama"
                                        isFocused={true}
                                        value={data.nama}
                                        onChange={(e) => setData('nama', e.target.value)}
                                    />
                                    <TextInput
                                        type="text"
                                        className="block mb-4 mx-auto w-full"
                                        placeholder="Kode Ruangan"
                                        name="kode"
                                        isFocused={true}
                                        value={data.kode}
                                          onChange={(e) => setData('kode', e.target.value)}
                                    />
                                    <PrimaryButton
                                        children="Tambah Ruangan"
                                        className="w-full "
                                        type="submit"
                                        processing={processing}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
