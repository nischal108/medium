import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
    message: string;
}

const Errorpage: React.FC<ErrorPageProps> = ({ message = "Are you lost ?" }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
                <p className="text-lg text-gray-700 mb-4">Something went wrong.</p>
                <p className="text-sm text-gray-500 mb-3">{message || "An unexpected error occurred."}</p>
                <Link
                    to={"/home"}
                    className="mt-12 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Return to home
                </Link>
            </div>
        </div>
    );
};

export default Errorpage;
