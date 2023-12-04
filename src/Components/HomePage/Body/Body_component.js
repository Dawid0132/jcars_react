import {Button, Col, Container, Row} from "react-bootstrap";
import Card_car_lesser_then_md from "./Card_car_lesser_then_md";
import CarDetails from "../../../Data_jsons/cardetails.json";
import Services_component from "./Services_component";
import Promotions_component from "./Promotions_component";
import Card_car_bigger_then_md from "./Card_car_bigger_then_md";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {larger_then_md, lesser_then_md} from "../../../features/sizeSlice";

const Body_component = () => {

    const size_changed = useSelector((state) => state.size.value)
    const dispatch = useDispatch();


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 992) {
                dispatch(larger_then_md())
            } else {
                dispatch(lesser_then_md());
            }
        }

        window.addEventListener('resize', handleResize);

    })

    return (<Container>
        <Container className={"mt-5"}>
            <Row>
                <div className={"col-12 border-warning border-5 border-start"}><h1
                    className={"text-white ps-3"}>Wynajmij teraz</h1></div>
            </Row>
            <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
                {CarDetails.cars.map((item, index) => {
                    if (!size_changed) {
                        return (<Card_car_lesser_then_md
                            key={`car${index}`}
                            car={item}
                        />)
                    } else {
                        return (<Card_car_bigger_then_md
                            key={`car${index}`}
                            car={item}
                        />)
                    }
                })}
            </Row>
        </Container>
        <Col xs={12} lg={12} md={12} sm={12} xl={12} className={"mt-2 text-center"}>
            <Button variant={"warning"} className={"w-100"}>Zobacz wszystkie samochody</Button>
        </Col>
        <Services_component/>
        <Promotions_component/>
    </Container>)
}

export default Body_component;