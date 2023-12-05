import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store.js";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Homepage from "./Components/HomePage/Homepage";
import Reservation from "./Components/Reservation/Reservation";


import 'bootstrap/dist/css/bootstrap.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "reservation",
                element: <Reservation/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
