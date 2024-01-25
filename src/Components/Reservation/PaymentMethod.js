import {useEffect, useRef, useState} from "react";
import {Button, Col, Image} from "react-bootstrap";
import "./Reservation.css";

const PaymentMethod = (prop) => {

    return (<Col lg={6} xl={6} md={6} xs={12} sm={12}>
        <Button
            id={`${prop.method.id}`}
            className={"border-0 p-0 h-100 w-100 bg-dark"}
            onClick={prop.setpayment}
        >
            <div
                className={`fw-bold bg-gray-800 p-3 h-100 w-100 d-flex flex-row justify-content-between unchecked ${prop.isActive ? "bg-indigo-800" : "bg-gray-800 "}`}>
                {prop.method.name}
                <Image
                    src={prop.method.src}
                    className={"me-4"}
                />
            </div>
        </Button>
    </Col>)
}

export default PaymentMethod;