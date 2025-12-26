/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// Helper function to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem("auth_token");
};

// Helper function to set auth token
const setAuthToken = (token: string): void => {
  localStorage.setItem("auth_token", token);
};

// Helper function to remove auth token
const removeAuthToken = (): void => {
  localStorage.removeItem("auth_token");
};

// Generic fetch function with auth
const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  } as Record<string, string>;

  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: options.headers,
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "حدث خطأ" }));
    throw new Error(error.message || "حدث خطأ في الطلب");
  }

  return response.json();
};

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    const data = await apiFetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (data.token) {
      setAuthToken(data.token);
    }
    return data;
  },

  logout: async () => {
    await apiFetch("/logout", {
      method: "POST",
    });
    removeAuthToken();
  },

  getUser: async () => {
    return apiFetch("/user");
  },
};

// Cards API
export const cardsAPI = {
  getAll: async () => {
    return apiFetch("/cards");
  },

  getById: async (id: number) => {
    return apiFetch(`/cards/${id}`);
  },

  create: async (cardData: any) => {
    return apiFetch("/cards", {
      method: "POST",
      body: JSON.stringify(cardData),
    });
  },

  update: async (id: number, cardData: any) => {
    return apiFetch(`/cards/${id}`, {
      method: "PUT",
      body: JSON.stringify(cardData),
    });
  },

  delete: async (id: number) => {
    return apiFetch(`/cards/${id}`, {
      method: "DELETE",
    });
  },
};

// Legislations API
export const legislationsAPI = {
  getAll: async (type?: string) => {
    const query =
      type && type !== "الكل" ? `?type=${encodeURIComponent(type)}` : "";
    return apiFetch(`/legislations${query}`);
  },

  getById: async (id: number) => {
    return apiFetch(`/legislations/${id}`);
  },

  create: async (legislationData: any) => {
    return apiFetch("/legislations", {
      method: "POST",
      body: JSON.stringify(legislationData),
    });
  },

  update: async (id: number, legislationData: any) => {
    return apiFetch(`/legislations/${id}`, {
      method: "PUT",
      body: JSON.stringify(legislationData),
    });
  },

  delete: async (id: number) => {
    return apiFetch(`/legislations/${id}`, {
      method: "DELETE",
    });
  },
};

export { getAuthToken, removeAuthToken };
