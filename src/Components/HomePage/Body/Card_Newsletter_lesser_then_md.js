import {Button, Card, Col, Form, Row} from "react-bootstrap";

const Card_Newsletter_lesser_then_md = (prop) => {
    return (
        <Card style={{
            backgroundColor: "#3e3e3e"
        }} className={"p-0 text-white mt-3"}>
            <Card.Img variant={"top"}
                      src={prop.item.src}/>
            <Card.Body>
                <h3 className={"fw-bold"}>{prop.item.title}</h3>
                <div
                    className={"border-warning border-5 border-bottom w-25 align-self-start"}></div>
                <Form className={"d-flex flex-row gap-3 mt-3"}>
                    <Form.Group as={Col} xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Form.Control
                            id={"promotion_input"}
                            style={{
                                backgroundColor: "#3e3e3e"
                            }}
                            required
                            type="email"
                            placeholder="E-mail"
                        />
                    </Form.Group>
                    <Button variant={"outline-warning"}
                            className={"col col-lg-4 col-md-4 col-xl-4 col-sm-4"} type="submit">Zapisz
                        się</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Card_Newsletter_lesser_then_md;