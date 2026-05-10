interface LoginResponse {
    message: string;
    token: string;
    user: {
        id: number;
        nombre: string;
    };
}

const API_URL = "http://localhost:3000/api/coaches";

export const loginCoach = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el login");
    }

    // Aquí TS ya sabe que el resultado tiene token, message y user
    return response.json();
};

export const registrarCoach = async (datos: any) => {
    const response = await fetch(`${API_URL}/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al registrarse");
    }

    return await response.json();
};
