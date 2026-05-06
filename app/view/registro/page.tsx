"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registrarCoach } from "@/app/services/authService";
import Swal from "sweetalert2";
export default function Registro() {
    const [mostrarContra1, setMostrarContra1] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre_completo: "",
        email: "",
        password: "",
        confirmarPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validación básica de contraseñas
        if (formData.password !== formData.confirmarPassword) {
            return Swal.fire("Error", "Las contraseñas no coinciden", "error");
        }

        try {
            await registrarCoach({
                nombre_completo: formData.nombre_completo,
                email: formData.email,
                password: formData.password,
            });

            await Swal.fire("¡Éxito!", "Cuenta creada correctamente. Ahora puedes iniciar sesión.", "success");
            router.push("/"); // Redirigir al login después del registro
        } catch (error: any) {
            Swal.fire("Error", error.message, "error");
        }
    };
    return (
        <div className="orbitron flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
            <div className="p-4 rounded-lg bg-white w-100 shadow-xl">
                <h1 className="text-center font-bold text-2xl">Fitner</h1>
                <h2 className="text-center text-gray-500">Crea tu cuenta y forma parte de nosotros</h2>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <h3 className="font-bold">Dirección de correo electronico</h3>
                    <input
                        required
                        name="email"
                        onChange={handleChange}
                        type="email"
                        className="focus:outline-none bg-gray-100 rounded-lg px-4 py-2 text-lg w-full selection:bg-yellow-300"
                    />

                    <h3 className="font-bold mt-4">Nombre completo</h3>
                    <input
                        required
                        name="nombre_completo"
                        onChange={handleChange}
                        type="text"
                        className="focus:outline-none bg-gray-100 rounded-lg px-4 py-2 text-lg w-full selection:bg-yellow-300 capitalized"
                    />

                    <div className="mt-8">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold">Contraseña</h3>
                            <h3
                                onClick={() => setMostrarContra1(!mostrarContra1)}
                                className="font-bold text-yellow-400 cursor-pointer hover:text-yellow-500 select-none"
                            >
                                Mostrar
                            </h3>
                        </div>

                        <input
                            type={mostrarContra1 ? "text" : "password"}
                            required
                            onChange={handleChange}
                            name="password"
                            className="focus:outline-none bg-gray-100 rounded-lg px-4 py-2 text-lg w-full selection:bg-yellow-300 font-bold"
                        />
                    </div>

                    <h3 className="font-bold mt-8"> Confirmar contraseña</h3>
                    <input
                        type="password"
                        name="confirmarPassword"
                        required
                        onChange={handleChange}
                        className="focus:outline-none bg-gray-100 rounded-lg px-4 py-2 text-lg w-full selection:bg-yellow-300 font-bold"
                    />
                    <button
                        type="submit"
                        className="text-center font-bold py-2 rounded-lg bg-yellow-300 text-black w-full mt-8 cursor-pointer hover:bg-yellow-400 duration-200 transition-colors"
                    >
                        Registrarme
                    </button>
                </form>
                <div className="bg-gray-200 w-full mt-4 mb-4 h-px rounded-lg px-10"></div>
                <Link href={"/"}>
                    <button className="text-center font-bold py-2 rounded-lg text-yellow-300 w-full mt-2 cursor-pointer border-1 border-white hover:border-yellow-300 duration-200 transition-colors">
                        Ya tengo una cuenta
                    </button>
                </Link>
            </div>
        </div>
    );
}
