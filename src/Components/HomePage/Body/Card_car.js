import {Button, Card, Col, Row, Stack} from "react-bootstrap";

const Card_car = (prop) => {

    return (<Card style={{
        backgroundColor: "#3e3e3e"
    }} className={"p-0 text-white mt-3"}>
        <Card.Img variant={"top"}
                  src={prop.car.src}/>
        <Card.Body>
            <Card.Title className={"fw-bold"}>{prop.car.name}
                <div className={"border-5 border-bottom border-warning w-25 mt-1"}></div>
            </Card.Title>
            <Card.Text>
                <Row>
                    {Object.keys(prop.car).map((key, i) => {
                        console.log(typeof prop.car[key] === "boolean")
                        if (key !== 'name' && key !== 'src' && key !== 'price') {
                            if (typeof prop.car[key] === "boolean") {
                                if (prop.car[key]) {
                                    return (<Col xl={2} lg={2} sm={4} xs={4}
                                                 className={"border-5 border-start border-warning mt-3 ps-1 text-uppercase"}>
                                        <small>{key}</small>
                                    </Col>)
                                }
                            } else {
                                return (<Col xl={2} lg={2} sm={4} xs={4}
                                             className={"border-5 border-start border-warning mt-3 ps-1 text-uppercase"}>
                                    <small>{prop.car[key]}</small></Col>)
                            }
                        }
                    })}
                </Row>
            </Card.Text>
            <Card.Footer>
                <Row className={"gap-2"}>
                    <div className={"text-warning h2 text-center"}>od {prop.car.price} zł/db</div>
                    <Button variant={"warning"}>Poznaj szczegóły</Button>
                    <Button variant={"outline-warning"}>Zerezerwuj</Button>
                </Row>
            </Card.Footer>
        </Card.Body>
    </Card>)
}

export default Card_car;