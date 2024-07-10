import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
        const [user , setUser] = useState(null);
        const [isAuthenticated , setIsAuthenticated] = useState(undefined);


        useEffect(()=>{
                    // onAuthStateChanged
                    setTimeout(() => {
                            setIsAuthenticated(false);    
                    }, 1000);
                    // setIsAuthenticated(true);
        }, [])      


        const login = async (email, password) =>{
            try {
                
            } catch (error) {
                
            }
        }

        const logout = async () =>{
            try {
                
            } catch (error) {
                
            }
        }

        const register = async (email, password, username, profileUrl) =>{
            try {
                
            } catch (error) {
                
            }
        }
        
        return (
            <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
                {children}
            </AuthContext.Provider>
        )

    }


    export const useAuth = () => {
        const value = useContext(AuthContext);

        if(!value){
            throw new Error('usrAuth must be wrapped inside AuthContext Provider');
        }

        return value;
    }