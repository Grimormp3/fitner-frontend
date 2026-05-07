export default function Planes() {
    return (
        <div className="">
            <div className="bg-white p-4 rounded-lg shadow-lg select-none">
                <h1 className="font-bold text-xl">Mis planes</h1>
                <h2 className="text-gray-500">
                    En esta sección puedes personalizar los planes de pago o suscripción que usarás en tus clientes. Teniendo la opción de categorizar los
                    distintos tipos de servicios.
                </h2>
            </div>

            <button className="px-4 py-2 rounded-lg bg-yellow-300 font-bold mt-8 cursor-pointer hover:bg-yellow-200 duration-300 shadow-lg">Nuevo plan</button>

            <div className="mt-8 grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-4 select-none">
                    <h1 className="text-yellow-300 font-bold text-2xl text-center">Fit pro</h1>
                    <h1 className="font-bold text-4xl mt-2 text-center">$1,200 MXN</h1>
                    <p className="text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum iste accusantium quaerat atque
                    </p>
                    <ul className="mt-2 font-bold">
                        <li>- Rutina de entrenamiento</li>
                        <li>- Programación</li>
                    </ul>
                    <div className="flex justify-between items-center mt-4">
                        <button className="text-blue-300 font-bold cursor-pointer hover:text-blue-500 duration-300">Editar plan</button>
                        <button className="text-red-400 font-bold cursor-pointer hover:text-red-300 duration-300">Eliminar plan</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 select-none flex flex-col justify-center items-center">
                    <h1 className="font-bold text-gray-500 text-center">Agrega tu primer plan con el boton de arriba</h1>
                    <h1 className="font-bold text-gray-500 text-center text-5xl">?</h1>
                </div>
            </div>
        </div>
    );
}
