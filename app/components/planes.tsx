"use client";
import NuevoPlan from "./nuevoPlan";
import { useState, useEffect } from "react";
import { getPlanes } from "../services/planService";
export default function Planes() {
    const [abrirRegistro, setAbrirRegistro] = useState(false);
    const [planes, setPlanes] = useState([]);

    const cargarPlanes = async () => {
        try {
            const data = await getPlanes();
            setPlanes(data);
            console.log("Esto tiene planes:", data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        cargarPlanes();
    }, []);

    return (
        <div className="">
            <div className="bg-white p-4 rounded-lg shadow-lg select-none">
                <h1 className="font-bold text-xl">Mis planes</h1>
                <h2 className="text-gray-500">
                    En esta sección puedes personalizar los planes de pago o suscripción que usarás en tus clientes. Teniendo la opción de categorizar los
                    distintos tipos de servicios.
                </h2>
            </div>

            <div className="flex items-center gap-4 mt-8">
                <button
                    onClick={() => setAbrirRegistro(true)}
                    className="px-4 py-2 rounded-lg bg-yellow-300 font-bold  cursor-pointer hover:bg-yellow-200 duration-300 shadow-lg"
                >
                    Nuevo plan
                </button>

                <button
                    onClick={cargarPlanes}
                    className="px-4 py-2 text-white rounded-lg bg-blue-300 font-bold cursor-pointer hover:bg-blue-200 duration-300 shadow-lg"
                >
                    Refrescar planes
                </button>
            </div>

            {abrirRegistro && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/30">
                    <NuevoPlan onClose={() => setAbrirRegistro(false)}></NuevoPlan>
                </div>
            )}

            <div className="mt-8 grid 2xl:grid-cols-4 grid-cols-3 gap-4 overflow-auto">
                {planes.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-lg p-4 select-none flex flex-col justify-center items-center h-100">
                        <h1 className="font-bold text-gray-500 text-center">Agrega tu primer plan con el boton de arriba</h1>
                        <h1 className="font-bold text-gray-500 text-center text-5xl">?</h1>
                    </div>
                ) : (
                    planes.map((item: any) => (
                        <div key={item.id_plan_coach} className="bg-white rounded-lg shadow-lg p-4 select-none flex flex-col">
                            <h1 className="text-yellow-300 font-bold text-2xl text-center uppercase">{item.nombre_plan}</h1>
                            <h1 className="font-bold text-4xl mt-2 text-center">${item.precio} MXN</h1>
                            <p className="text-gray-500 mt-2">{item.descripcion}</p>
                            <h1>Incluye:</h1>
                            <ul className="mt-2 font-bold">
                                {item.incluye_vinetas.split("-").map((vineta: string, i: number) => (
                                    <li key={i}>- {vineta.trim()}</li>
                                ))}
                            </ul>

                            <div className="flex justify-between items-center mt-auto pt-4">
                                <button className="text-blue-300 font-bold cursor-pointer hover:text-blue-500 duration-300">Editar plan</button>
                                <button className="text-red-400 font-bold cursor-pointer hover:text-red-300 duration-300">Eliminar plan</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
