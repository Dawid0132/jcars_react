import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import Card_car_lesser_then_md from "./Card_car_lesser_then_md";
import Services_component from "./Services_component";
import Promotions_component from "./Promotions_component";
import Card_car_bigger_then_md from "./Card_car_bigger_then_md";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setLargerThenMd, setLesserThenMd} from "../../../Jwt/Reducers/Funcionality/Actions/Actions";

const url = "http://localhost:8080/cars";

const Body_component = () => {

    const {sizeChanged} = useSelector((state) => state.size);
    const {cars} = useSelector((state) => state.cars);
    const [isBigger, setIsBigger] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 992) {
                setIsBigger(false);
            } else {
                setIsBigger(true);
            }
        }

        window.addEventListener('resize', handleResize);
    })

    useEffect(() => {
        if (isBigger) {
            dispatch(setLargerThenMd())
        } else {
            dispatch(setLesserThenMd())
        }
    }, [isBigger, dispatch])

    return (<Container>
        <Container className={"mt-5"}>
            <Row>
                <div className={"col-12 border-warning border-5 border-start"}><h1
                    className={"text-white ps-3"}>Wynajmij teraz</h1></div>
            </Row>
            <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
                {cars.map((car, index) => {
                        if (index < 5) {
                            if (!sizeChanged) {
                                return (<Card_car_lesser_then_md
                                    key={car.id}
                                    car={car}
                                />)
                            } else {
                                return (
                                    <Card_car_bigger_then_md
                                        key={car.id}
                                        car={car}
                                    />
                                )
                            }
                        }
                    }
                )
                }
                })}
            </Row>
        </Container>
        <Col xs={12} lg={12} md={12} sm={12} xl={12} className={"mt-2 text-center"}>
            <Link to={`/cars`}>
                <Button variant={"warning"} className={"w-100"}>Zobacz wszystkie samochody</Button>
            </Link>
        </Col>
        <Services_component/>
        <Promotions_component/>
    </Container>)
}

export default Body_component;