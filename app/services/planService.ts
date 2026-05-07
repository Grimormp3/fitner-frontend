const API_URL = "http://localhost:3000/api/planes";

export const getPlanes = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Error al cargar los planes");
    return await response.json();
};

export const registrarPlan = async (datos: any) => {
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
        throw new Error(errorData.error || "Error al registrar el plan");
    }

    return await response.json();
};
