import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from "./historyNavigation.module.css"

export const HistoryContext = createContext(null);

export function HistoryNavigation({ children }) {
    const location = useLocation();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory((prevHistory) => {
            const newPath = location.pathname;

            if (newPath !== prevHistory[prevHistory.length - 1]) {
                return [...prevHistory, newPath];
            }

            return prevHistory;
        });

    }, [location]);

    return (
        <HistoryContext.Provider value={{history, setHistory}}>
            {children}
        </HistoryContext.Provider>
    );
}

export function useMyContext() {
    return useContext(HistoryContext);
}