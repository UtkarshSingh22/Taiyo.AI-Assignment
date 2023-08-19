import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Contacts from "./components/contacts/Contacts";
import ChartsAndMaps from "./components/charts/ChartsAndMaps";
import store from "./store";
import { QueryClient, QueryClientProvider } from "react-query";

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <div className="App min-h-screen my-11 mx-auto flex-col items-center max-w-6xl ">
            <nav className="flex justify-center items-center gap-14">
                <Link to={"/"} className="text-red-500 hover:text-red-700">
                    Contacts
                </Link>
                <Link
                    to={"/charts"}
                    className="text-red-500 hover:text-red-700"
                >
                    Charts and Maps
                </Link>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={
                        <Provider store={store}>
                            <Contacts />
                        </Provider>
                    }
                />
                <Route
                    path="/charts"
                    element={
                        <QueryClientProvider client={queryClient}>
                            <ChartsAndMaps />
                        </QueryClientProvider>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
