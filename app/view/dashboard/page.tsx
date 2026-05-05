"use client";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Inicio from "@/app/components/inicio";
import ClicPerfil from "@/app/components/clicPerfil";
export default function Dashboard() {
    const [tab, setTab] = useState("inicio");
    const [opcionesPerfil, setOpcionesPerfil] = useState(false);
    const usuario = JSON.parse(localStorage.getItem("user") || "{}");
    return (
        <div className="w-full min-h-screen orbitron text-black bg-gray-100 grid grid-cols-6 ">
            <div className="bg-white shadow-xl">
                <div className="flex flex-col items-center justify-center mt-8 rounded-lg cursor-pointer">
                    <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png"
                        alt="Foto de usuario"
                        className="w-30 h-30 object-cover rounded-full"
                    />
                    <h1 onClick={() => setOpcionesPerfil(!opcionesPerfil)} className="text-gray-500 mt-4 flex items-center gap-2 text-sm">
                        {usuario.nombre} <FaChevronDown />
                    </h1>
                    <div className="w-full">{opcionesPerfil && <ClicPerfil onClose={() => setOpcionesPerfil(false)}></ClicPerfil>}</div>
                </div>

                <div className="mt-8 font-bold w-full flex flex-col items-center gap-2 px-2">
                    <button
                        onClick={() => setTab("inicio")}
                        className={`transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg text-start text-xl cursor-pointer w-full
                        ${tab === "inicio" ? "bg-yellow-300" : "bg-white"}`}
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => setTab("planes")}
                        className={`transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg  text-start text-xl cursor-pointer w-full
                        ${tab === "planes" ? "bg-yellow-300" : "bg-white"}`}
                    >
                        Mis planes
                    </button>
                    <button
                        onClick={() => setTab("rutinas")}
                        className={`transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg  text-start text-xl cursor-pointer w-full
                        ${tab === "rutinas" ? "bg-yellow-300" : "bg-white"}`}
                    >
                        Rutinas
                    </button>
                    <button
                        onClick={() => setTab("dietas")}
                        className={`transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg  text-start text-xl cursor-pointer w-full
                        ${tab === "dietas" ? "bg-yellow-300" : "bg-white"}`}
                    >
                        Dietas
                    </button>
                </div>
            </div>
            <div className="col-span-5 p-4">
                {tab === "inicio" && <Inicio></Inicio>}
                {tab === "planes" && <Inicio></Inicio>}
            </div>
        </div>
    );
}
