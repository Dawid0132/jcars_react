import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store.js";
import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Homepage, {
    loader as carsLoader
} from "./Components/HomePage/Homepage";
import Reservation, {
    loader as carLoader
} from "./Components/Reservation/Reservation";


import 'bootstrap/dist/css/bootstrap.css';
import SignIn from "./Components/Credentials/SignIn";
import Login from "./Components/Credentials/Login";
import SignUp from "./Components/Credentials/SignUp";
import Profile from "./Components/Profile/Profile";
import DisplayAllCars from "./Components/DisplayAllCars/DisplayAllCars";
import All, {
    loader as allCarsLoader
} from "./Components/DisplayAllCars/Filtr/All";
import Models, {
    loader as ModelsLoader
} from "./Components/DisplayAllCars/Filtr/Models";
import Brands, {
    loader as BrandsLoader
} from "./Components/DisplayAllCars/Filtr/Brands";


const router = createBrowserRouter(createRoutesFromElements(<Route element={<App/>}>
    <Route index path={"/"} element={<Homepage/>} loader={carsLoader}/>
    <Route path={"/reservation/:id"} element={<Reservation/>} loader={carLoader}/>
    <Route path={"/login"} element={<Login/>}>
        <Route index path={"/login"} element={<SignIn/>}/>
        <Route path={"/login/signup"} element={<SignUp/>}/>
    </Route>
    <Route path={"/profile"} element={<Profile/>}/>
    <Route path={"/cars"} element={<DisplayAllCars/>}>
        <Route index path={"/cars"} element={<All/>} loader={allCarsLoader}/>
        <Route index path={"/cars/models/:id"} element={<Models/>} loader={ModelsLoader}/>
        <Route index path={"/cars/brands/:id"} element={<Brands/>} loader={BrandsLoader}/>
    </Route>
</Route>))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();