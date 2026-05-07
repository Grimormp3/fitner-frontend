import Swal from "sweetalert2";
import { registrarPlan } from "../services/planService";
import { useState } from "react";
interface Props {
    onClose: () => void;
}

export default function NuevoPlan({ onClose }: Props) {
    const [formData, setFormData] = useState({
        nombre_plan: "",
        precio: "",
        descripcion: "",
        incluye_vinetas: "",
        duracion_meses: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const datosParaEnviar = {
                ...formData,
            };

            await registrarPlan(datosParaEnviar);
            Swal.fire({
                icon: "success",
                title: "Plan creado",
            });
            onClose();
        } catch (error: any) {
            Swal.fire("Error", error.message, "error");
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg w-150 border-2 border-gray-200">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">Nuevo plan</h1>
                <button onClick={onClose} className="px-4 py-2 rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200 font-bold">
                    Cerrar
                </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
                <h1 className="font-bold text-lg">Nombre</h1>
                <input
                    onChange={handleChange}
                    name="nombre_plan"
                    type="text"
                    placeholder="Ej: Premium Pro"
                    className="capitalize px-4 py-2 rounded-lg bg-gray-100 w-full focus:outline-none focus:ring-3 focus:ring-yellow-500"
                />

                <h1 className="font-bold text-lg mt-2">Precio</h1>
                <input
                    onChange={handleChange}
                    name="precio"
                    type="number"
                    placeholder="$"
                    className="px-4 py-2 rounded-lg bg-gray-100 w-full focus:outline-none focus:ring-3 focus:ring-yellow-500"
                />

                <h1 className="font-bold text-lg mt-2">Descripción</h1>
                <textarea
                    onChange={handleChange}
                    name="descripcion"
                    placeholder="Ej: Ideal para asesorados que sean principiantes o que no sepan que hacer con su vida."
                    className="px-4 py-2 rounded-lg bg-gray-100 w-full focus:outline-none focus:ring-3 focus:ring-yellow-500"
                ></textarea>

                <h1 className="font-bold text-lg mt-2">¿Que incluye? (separa con -)</h1>
                <textarea
                    onChange={handleChange}
                    name="incluye_vinetas"
                    placeholder="Ej: Dieta - Entrenamiento - Guia asesorada"
                    className="px-4 py-2 rounded-lg bg-gray-100 w-full focus:outline-none focus:ring-3 focus:ring-yellow-500"
                ></textarea>

                <button
                    type="submit"
                    className="w-full text-center py-4 flex justify-center rounded-lg bg-yellow-300 font-bold mt-4 cursor-pointer hover:bg-yellow-200 duration-300"
                >
                    Crear plan
                </button>
            </form>
        </div>
    );
}
