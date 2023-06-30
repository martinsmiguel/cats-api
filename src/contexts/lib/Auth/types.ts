export interface User {
    id: string;
    fullName: string;
    email: string;
    favorites: string[];
}

export interface AuthContextData {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null;
}
