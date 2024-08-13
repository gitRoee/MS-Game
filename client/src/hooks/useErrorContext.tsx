import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextState {
    isError: boolean;
    onError: () => void;
}

const ErrorContext = createContext<ContextState>({} as ContextState);


export const ErrorProvider = ({ children }: PropsWithChildren) => {
    const [isError, setIsError] = useState<boolean>(false);

    const onError = () => {
        setIsError(true);
    }

    const value = {
        isError,
        onError,
    };

    return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export const useErrorContext = () => useContext(ErrorContext);