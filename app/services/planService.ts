const API_URL = "http://localhost:3000/api/planes";

export const getPlanes = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
};
