import {Button, Card, Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Card_car_lesser_then_md = (prop) => {

    return (<Card style={{
        backgroundColor: "#3e3e3e"
    }} className={"p-0 text-white mt-3"}>
        <Card.Img variant={"top"}
                  src={prop.car.imageUrl}/>
        <Card.Body>
            <Card.Title className={"fw-bold"}>
                {prop.car.model.brand.name} {prop.car.model.name}
                <div className={"border-5 border-bottom border-warning w-25 mt-1"}></div>
            </Card.Title>
            <Card.Text>
                <Row>
                    {prop.car.attributes.map((attr, index) => {
                        if (index < 6) {
                            return (<Col key={index} xl={2} lg={2} sm={4} xs={4}
                                         className={"border-5 border-start border-warning mt-3 ps-1 text-uppercase"}>
                                <small>{attr.name}</small>
                            </Col>)
                        }
                    })}
                </Row>
            </Card.Text>
            <Card.Footer>
                <Row className={"gap-2"}>
                    <div className={"text-warning h2 text-center"}>od {prop.car.rentalPrice} zł/db</div>
                    <Button variant={"warning"}>Poznaj szczegóły</Button>
                    <Link to={`/reservation/${prop.car.id}`}>
                        <Button variant={"outline-warning"}>Zerezerwuj</Button>
                    </Link>
                </Row>
            </Card.Footer>
        </Card.Body>
    </Card>)
}

export default Card_car_lesser_then_md;