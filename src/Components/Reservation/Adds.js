import {Button, Col, Container, Form, Image} from "react-bootstrap";
import "./Reservation.css";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_TO_LIST_ADD, REMOVE_FROM_LIST_ADD} from "../../Jwt/Actions/Type";
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/20/solid'


const Add = (prop) => {

    const ref = useRef();
    const dispatch = useDispatch();

    const OnClick = (event) => {
        if (event.currentTarget.id > 1) {


            
            if (ref.current.classList.contains("bg-indigo-700")) {

                ref.current.classList.remove("bg-indigo-700");
                ref.current.classList.add("bg-gray-800");
                /*dispatch(removeFromList(prop.add));*/
                dispatch({
                    type: REMOVE_FROM_LIST_ADD,
                    payload: prop.add
                })
            } else {

    
                ref.current.classList.remove("bg-gray-800");
                ref.current.classList.add("bg-indigo-700");
                /*dispatch(addToList(prop.add));*/
                dispatch({
                    type: ADD_TO_LIST_ADD,
                    payload: prop.add
                })
            }
        }
    }

    return (<Col lg={6} xl={6} md={12} xs={12} sm={12}>
        <Button
            id={`${prop.add.id}`}
            className={"border-0 p-0 h-100 w-100"}
            onClick={OnClick}
        >
            <div ref={ref} className={`flex bg-gray-800 justify-between p-3 h-100 w-100 ${(prop.add.id > 1) ?  null : "bg-indigo-700" }`}>
                <div className={"w-75 flex flex-col justify-center text-left"}>
                    <h5 className={"fw-bold"}>{prop.add.title}</h5>
                    <div><small>{prop.add.description ? prop.add.description : ""}</small></div>
                </div>
                <div className={"flex items-center text-warning"}>
                    <div><small>{prop.add.price ? `${prop.add.price} zł / db` : "w cenie"}</small><Image
                        src={"/check-circle-fill.svg"}
                        className={"ms-3"}
                    /></div>
                </div>
            </div>
        </Button>
    </Col>)
}

export default Add;