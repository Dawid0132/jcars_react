import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store.js";
import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Homepage, {
    loader as carsLoader
} from "./Components/HomePage/Homepage";
import Reservation, {
    loader as carLoader
} from "./Components/Reservation/Reservation";


import 'bootstrap/dist/css/bootstrap.css';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<App/>}>
            <Route index path={"/home"} element={<Homepage/>} loader={carsLoader}/>
            <Route path={"/reservation/:id"} element={<Reservation/>} loader={carLoader}/>
        </Route>
    ))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
