import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Card from "@/Components/Card";

export default function Dashboard({ auth, ruangan, flashMessage }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {flashMessage.message && (
                                <div className="p-2 my-3 rounded-lg border bg-red-500 text-white">
                                    {flashMessage.message}
                                </div>
                            )}
                            <Link href={route("dashboard.add")}>
                                <PrimaryButton children="Tambah Ruangan" />
                            </Link>

                            <div className="flex flex-wrap justify-start gap-2 mt-5 ">
                                {ruangan.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={route("dashboard.controll", {
                                            id: item.id,
                                        })}
                                    >
                                        <Card
                                            data={item.nama}
                                            on="On"
                                            status="Online"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
