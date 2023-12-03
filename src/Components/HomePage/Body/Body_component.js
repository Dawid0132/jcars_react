import {Button, Col, Container, Row} from "react-bootstrap";
import Card_car from "./Card_car";
import CarDetails from "../../../Data_jsons/cardetails.json";
import Services_component from "./Services_component";
import Promotions_component from "./Promotions_component";

const Body_component = () => {

    return (
        <Container>
            <Container className={"mt-5"}>
                <Row>
                    <div className={"col-12 border-warning border-5 border-start"}><h1
                        className={"text-white ps-3"}>Wynajmij teraz</h1></div>
                </Row>
                <Row className={"mt-3"} xs={1} md={1} lg={1} xl={1}>
                    {CarDetails.cars.map((item, index) => (
                        <Card_car
                            key={`car${index}`}
                            car={item}
                        />
                    ))}
                </Row>
            </Container>
            <Col xs={12} lg={12} md={12} sm={12} xl={12} className={"mt-2 text-center"}>
                <Button variant={"warning"} className={"w-100"}>Zobacz wszystkie samochody</Button>
            </Col>
            <Services_component/>
            <Promotions_component/>
        </Container>
    )
}

export default Body_component;