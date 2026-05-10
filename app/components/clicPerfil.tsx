import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
interface Props {
    onClose: () => void;
}
export default function ClicPerfil({ onClose }: Props) {
    const router = useRouter();
    const cerrarSesion = () => {
        Swal.fire({
            title: "¿Estás seguro de cerrar la sesión?",
            showCancelButton: true,
            confirmButtonText: "Si, cerrar sesión",
            cancelButtonText: "No, permanecer aquí",
            confirmButtonColor: "red",
            cancelButtonColor: "gray",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                router.push("/");
            }
        });
    };
    return (
        <div className="shadow-lg bg-white p-4 rounded-lg flex flex-col gap-4 w-full -mt-6 w-full border-2 border-gray-100">
            <h1 className="hover:font-bold">Editar perfil</h1>
            <h2 onClick={cerrarSesion} className="hover:font-bold">
                Cerrar sesión
            </h2>
            <h2 onClick={onClose} className="hover:font-bold">
                Cerrar
            </h2>
        </div>
    );
}
