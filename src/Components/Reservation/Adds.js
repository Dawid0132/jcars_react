import {Button, Col, Container, Form, Image} from "react-bootstrap";
import "./Reservation.css";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {larger_then_md} from "../../features/sizeSlice";
import {addToList, removeFromList} from "../../features/addsSlice";

const Add = (prop) => {

    const ref = useRef();
    const dispatch = useDispatch();

    const OnClick = (event) => {
        if (event.currentTarget.id > 1) {
            if (ref.current.classList.contains("checked")) {
                ref.current.classList.remove("checked");
                dispatch(removeFromList(prop.add));
            } else {
                ref.current.classList.add("checked");
                dispatch(addToList(prop.add));
            }
        }
    }


    return (<Col lg={6} xl={6} md={12} xs={12} sm={12}>
        <Button
            id={`${prop.add.id}`}
            className={"border-0 p-0 h-100 w-100 bg-dark"}
            onClick={OnClick}
        >
            <div ref={ref} className={`d-flex flex-row p-3 h-100 w-100 ${prop.add.id > 1 ? "unchecked" : "checked"}`}>
                <div className={"w-75 d-flex flex-column justify-content-center align-items-start"}>
                    <h5 className={"fw-bold"}>{prop.add.title}</h5>
                    <div><small>{prop.add.description ? prop.add.description : ""}</small></div>
                </div>
                <div className={"d-flex flex-row justify-content-center align-items-center text-warning"}>
                    <div><small>{prop.add.price ? `${prop.add.price}zł/db` : "w cenie"}</small><Image
                        src={"/check-circle-fill.svg"}
                        className={"ms-3"}
                    /></div>
                </div>
            </div>
        </Button>
    </Col>)
}

export default Add;