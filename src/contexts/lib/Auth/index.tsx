import React, {
    createContext,
    useState,
    useContext,
    useMemo,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextData, User } from './types';
import { Users } from './consts';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCachedUser();
    }, []);

    const getCachedUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('cachedUser');
            const cachedUser = jsonValue != null ? JSON.parse(jsonValue) : null;
            setUser(cachedUser);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    const saveUserToCache = async (user: User | null) => {
        try {
            const jsonValue = JSON.stringify(user);
            await AsyncStorage.setItem('cachedUser', jsonValue);
        } catch (error) {
        }
    };

    const isLoggedIn = useMemo(() => {
        if (isLoading) {
            return false;
        }
        return !!user;
    }, [user, isLoading]);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const authenticatedUser = Users.find(
                (user) => user.email === email
            );
            if (authenticatedUser) {
                setUser(authenticatedUser);
                await saveUserToCache(authenticatedUser);
                return true;
            }
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        AsyncStorage.removeItem('cachedUser');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isLoggedIn,
                isLoading,
                error
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
