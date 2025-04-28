// // server ip 
export const baseURL = "http://54.160.156.5:5000/api";
export const imageURL = "http://54.160.156.5:5000";

// local ip 
// export const baseURL = "http://192.168.18.205:8000/api";
// export const imageURL = "http://192.168.18.205:8000";

export const FireApi = async (endpoint, method, data = null) => {
    const token = localStorage.getItem("user-visited-dashboard");
    console.log(token);
    const headers = {};

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    };
    
    if (!(data instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    };

    const options = {
        method: method,
        headers,
        body: data ? (data instanceof FormData ? data : JSON.stringify(data)) : null
    };

    try {
        const response = await fetch(`${baseURL}${endpoint}`, options);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || response.statusText);
        }
        
        return response.json();
    } catch (error) {
        console.error('Error in fireApi:', error);
        throw error;
    }
};

