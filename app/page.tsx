"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginCoach } from "./services/authService";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const login = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await loginCoach(email, password);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            Swal.fire("Bienvenido", "Has iniciado sesión correctamente", "success");
            router.push("/view/dashboard");
        } catch (error: any) {
            Swal.fire("Oops!", error.message, "error");
        }
    };

    return (
        <div className="orbitron flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
            <div className="p-4 rounded-lg bg-white w-100 shadow-xl">
                <h1 className="text-center font-bold text-2xl select-none">Fitner</h1>
                <h2 className="text-center text-gray-500">¡Bienvenido de nuevo! Entrenador</h2>

                <form className="mt-4" onSubmit={login}>
                    <h3 className="font-bold">Dirección de correo electronico</h3>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="focus:outline-none bg-gray-100 rounded-lg px-4 py-2 text-lg w-full selection:bg-yellow-300"
                    />
                    <h3 className="font-bold mt-8">Contraseña</h3>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className="focus:outline-none bg-gray-100 rounded-lg px-4 py-2 text-lg w-full selection:bg-yellow-300 font-bold"
                    />

                    <button
                        type="submit"
                        className="text-center font-bold py-2 rounded-lg bg-yellow-300 text-black w-full mt-8 cursor-pointer hover:bg-yellow-400 duration-200 transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>
                <div className="bg-gray-200 w-full mt-4 mb-4 h-px rounded-lg px-10"></div>
                <Link href={"/view/registro"}>
                    <button className="text-center font-bold py-2 rounded-lg text-yellow-300 w-full mt-2 cursor-pointer border-1 border-white hover:border-yellow-300 duration-200 transition-colors">
                        No tengo una cuenta
                    </button>
                </Link>
            </div>
        </div>
    );
}
