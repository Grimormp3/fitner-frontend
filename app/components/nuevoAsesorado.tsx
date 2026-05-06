"use client";
import { IoClose } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { useState } from "react";
import { registrarAsesorado } from "../services/asesoradoService";
import Swal from "sweetalert2";
interface AsesoradoProps {
    onClose: () => void;
}
export default function NuevoAsesorado({ onClose }: AsesoradoProps) {
    const [formData, setFormData] = useState({
        nombre_completo: "",
        edad: "",
        sexo: "Masculino",
        actividad_fisica: "",
        altura_inicial: "",
        meta_peso: 0,
        peso_actual: 0,
        enfermedades_observaciones: "",
        id_plan_coach: 1,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const datosParaEnviar = {
                ...formData,
            };

            await registrarAsesorado(datosParaEnviar);
            Swal.fire("¡Listo!", "Asesorado creado correctamente", "success");
            onClose();
        } catch (error: any) {
            Swal.fire("Error", error.message, "error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="xl:w-1/2 w-full rounded-lg shadow-lg bg-white p-4 select-none border-2 border-gray-100">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">Registrar nuevo cliente</h1>
                <IoClose onClick={onClose} className="text-2xl hover:text-orange-300 cursor-pointer bg-gray-100 rounded-md" />
            </div>

            <form onSubmit={handleSubmit}>
                <h1 className="font-semibold text-md mt-8">Nombre completo del cliente o asesorado</h1>
                <input
                    name="nombre_completo"
                    onChange={handleChange}
                    type="text"
                    className="px-4 py-2 rounded-lg bg-gray-100 w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400 mt-1"
                />

                <div className="mt-4 grid grid-cols-4 gap-4 items-center">
                    <div>
                        <h1 className="font-semibold text-md">Edad</h1>
                        <input
                            name="edad"
                            onChange={handleChange}
                            type="number"
                            className="px-4 py-2 rounded-lg bg-gray-100 w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400 mt-1"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-md">Altura (cm)</h1>
                        <input
                            name="altura_inicial"
                            onChange={handleChange}
                            type="number"
                            className="px-4 py-2 rounded-lg bg-gray-100 w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400 mt-1"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-md">Actividad fisica</h1>
                        <input
                            name="actividad_fisica"
                            onChange={handleChange}
                            type="text"
                            className="px-4 py-2 capitalize rounded-lg bg-gray-100 w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400 mt-1"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-md ">Sexo</h1>
                        <select
                            name="sexo"
                            value={formData.sexo}
                            onChange={handleChange}
                            className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-full"
                        >
                            <option value="Masculino" className="">
                                Masculino
                            </option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                        <h1 className="font-semibold text-md mt-4">Peso actual (kg)</h1>
                        <input
                            name="peso_actual"
                            onChange={handleChange}
                            type="number"
                            className="px-4 py-2 rounded-lg bg-gray-100 w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400 mt-1"
                        />
                    </div>
                    <div>
                        <h1 className="font-semibold text-md mt-4">Peso objetivo (kg)</h1>
                        <input
                            name="meta_peso"
                            onChange={handleChange}
                            type="number"
                            className="px-4 py-2 rounded-lg bg-gray-100 w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400 mt-1"
                        />
                    </div>
                </div>

                <h1 className="font-semibold text-md mt-4">Plan o suscripción de tu asesorado</h1>
                <select name="" id="" className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-full">
                    <option value="" className="">
                        Solo entrenamiento
                    </option>
                    <option value="">Solo dieta</option>
                    <option value="">Pro premium</option>
                </select>

                <h1 className="font-semibold text-md mt-4">Enfermedades u observaciones</h1>
                <textarea
                    name="enfermedades_observaciones"
                    onChange={handleChange}
                    className="bg-gray-100 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Ej: Presenta una lesión en la rodilla y manguito rotador"
                ></textarea>

                <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-yellow-300 font-bold flex flex-row items-center justify-center mt-4 gap-2 text-lg cursor-pointer hover:bg-yellow-400 duration-300"
                >
                    <FaRegSave className="text-xl" /> Guardar
                </button>
            </form>
        </div>
    );
}
