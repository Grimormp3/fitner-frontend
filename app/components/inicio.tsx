"use client";
import { IoIosAdd } from "react-icons/io";
import NuevoAsesorado from "@/app/components/nuevoAsesorado";
import { useState, useEffect } from "react";
import { getAsesorados } from "../services/asesoradoService";
import { getPlanes } from "../services/planService";
import Swal from "sweetalert2";
export default function Inicio() {
    const [mostrarNuevoAsesorado, setMostrarNuevoAsesorado] = useState(false);
    const [asesorados, setAsesorados] = useState([]);
    const [numPlanes, setNumPlanes] = useState(0);
    const [planes, setPlanes] = useState([]);

    const cargarDatos = async () => {
        try {
            const data = await getAsesorados();
            setAsesorados(data);
        } catch (error) {
            console.error("Error en obtener asesorados del coach:", error);
        }
    };

    const comprobarPlanes = async () => {
        try {
            const datos = await getPlanes();
            setNumPlanes(datos.length);
            setPlanes(datos);
        } catch (error) {
            console.log("Error al cargar los planes en el front-end:", error);
        }
    };

    const comprobarBotonCrearAsesorado = () => {
        if (numPlanes === 0) {
            Swal.fire("Primero lo primero", "Crea tu primer plan de pago para asesorados", "warning");
        } else {
            setMostrarNuevoAsesorado(true);
        }
    };
    useEffect(() => {
        cargarDatos();
        comprobarPlanes();
    }, []);

    return (
        <div className="relative">
            <div className="shadow-lg bg-white p-4 rounded-lg">
                <div className="flex justify-between">
                    <h1 className="font-bold">Mis asesorados</h1>

                    <div className="flex flex-row items-center gap-4">
                        <button
                            onClick={cargarDatos}
                            className="px-4 py-2 rounded-lg border-1 border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            Refrescar asesorados
                        </button>
                        <button
                            onClick={comprobarBotonCrearAsesorado}
                            className="flex items-center text-yellow-500 duration-200 cursor-pointer border-1 border-yellow-300 px-4 py-2 rounded-lg hover:bg-yellow-300 hover:text-white"
                        >
                            <IoIosAdd /> Nuevo
                        </button>
                    </div>
                </div>

                <div className="mt-4 h-80 overflow-y-auto">
                    {asesorados.length === 0 ? (
                        <p>No tienes asesorados registrados</p>
                    ) : (
                        <table className="table-auto w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-4 py-2 font-semibold text-gray-700">Nombre</th>
                                    <th className="px-4 py-2 font-semibold text-gray-700">Peso</th>
                                    <th className="px-4 py-2 font-semibold text-gray-700">Edad</th>
                                    <th className="px-4 py-2 font-semibold text-gray-700">Sexo</th>
                                </tr>
                            </thead>
                            <tbody className="cursor-pointer">
                                {asesorados.map((a: any) => (
                                    <tr key={a.id_asesorado} className="hover:bg-yellow-50 transition-colors capitalize">
                                        <td className="border-t border-gray-200 px-4 py-2">{a.nombre_completo}</td>
                                        <td className="border-t border-gray-200 px-4 py-2">{a.peso_actual}</td>
                                        <td className="border-t border-gray-200 px-4 py-2">{a.edad}</td>
                                        <td className="border-t border-gray-200 px-4 py-2">{a.sexo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-4 mt-8 gap-8 select-none">
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl">20</h1>
                    <h2 className="text-gray-500">Asesorados</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl">10</h1>
                    <h2 className="text-gray-500">En definición</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl">10</h1>
                    <h2 className="text-gray-500">En volumen</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl">20</h1>
                    <h2 className="text-gray-500">Ausentes</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center col-span-2">
                    <h1 className="font-bold text-2xl">2/3</h1>
                    <h2 className="text-gray-500">Planes elaborados</h2>
                </div>
            </div>

            {mostrarNuevoAsesorado && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <NuevoAsesorado onClose={() => setMostrarNuevoAsesorado(false)}></NuevoAsesorado>
                </div>
            )}
        </div>
    );
}
