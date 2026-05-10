// Este servicio envia los datos relacionados a la tabla asesorados y manejo de Token para comprobar la sesión activa.

const API_URL = "http://localhost:3000/api/asesorados";

export const registrarAsesorado = async (datos: any) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/registrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al registrar asesorado");
    }

    return await response.json();
};

export const getAsesorados = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error("Error al cargar asesorados");
    return await response.json();
};

export const getAsesoradoById = async (id: number) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error("Error al cargar el detalle del asesorado");
    return await response.json();
};
