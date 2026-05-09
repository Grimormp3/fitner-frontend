export interface Props {
    onClose: () => void;

    nombre_completo: string;
    edad: number;
    sexo: string;
    actividad_fisica: string;
    altura_inicial: number;
    meta_peso: number;
    peso_actual: number;
    enfermedades_observaciones: string;
    id_asesorado: number;
    id_plan_coach: number;
}

export default function PerfilUsuario({
    onClose,
    actividad_fisica,
    altura_inicial,
    edad,
    enfermedades_observaciones,
    id_asesorado,
    id_plan_coach,
    meta_peso,
    nombre_completo,
    peso_actual,
    sexo,
}: Props) {
    return (
        <div className="w-1/2 bg-white border-2 border-gray-200 shadow-lg p-4 rounded-lg select-none">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-lg">Perfil del usuario</h1>
                <button onClick={onClose} className="bg-gray-100 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-200 duration-300">
                    Cerrar perfil
                </button>
            </div>

            <h1 className="uppercase font-bold text-3xl mt-4">{nombre_completo || "No se pudo cargar nombre"}</h1>

            <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <h1>Edad</h1>
                    <h1 className="font-bold text-2xl">{edad}</h1>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <h1>Sexo</h1>
                    <h1 className="font-bold text-2xl text-ellipsis overflow-hidden">{sexo}</h1>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <h1>Actividad fisica</h1>
                    <h1 className="font-bold text-2xl">{actividad_fisica}</h1>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <h1>Altura</h1>
                    <h1 className="font-bold text-2xl">{altura_inicial} cm</h1>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg col-span-2">
                    <h1 className="font-semibold">Enfermedades u observaciones</h1>
                    <p className="text-gray-500">{enfermedades_observaciones}</p>
                </div>

                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <h1>Meta de peso</h1>
                    <h1 className="font-bold text-2xl">{meta_peso} kg</h1>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <h1>Peso actual</h1>
                    <h1 className="font-bold text-2xl">{peso_actual} kg</h1>
                </div>
            </div>
        </div>
    );
}
