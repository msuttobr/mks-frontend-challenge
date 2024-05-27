import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const DivErrorPage = styled.div`
    display: grid;
    gap: 5px;
    place-content: center;
    height: 100vh;
`;

interface RouteError {
    data: string;
    error: {
        columnNumber: number;
        fileName: string;
        lineNumber: number;
        message: string;
        stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
}

const ErrorPage = () => {
    const error = useRouteError() as RouteError;

    return (
        <DivErrorPage>
            <h1>Erro!</h1>
            <p>Desculpe, um erro inesperado aconteceu.</p>
            <p>
                <i>{error.statusText}</i>
            </p>
            <p>
                <i>{error.error.message}</i>
            </p>
        </DivErrorPage>
    );
}

export default ErrorPage;