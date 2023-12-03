import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import Promotions from "../../../Data_jsons/promotions.json"

export const Promotions_component = () => {
    return (
        <Container className={"mt-5 text-white"}>
            <Row>
                <div className={"col-12 border-warning border-5 border-start"}><h1
                    className={"text-white ps-3"}>Promocje</h1></div>
            </Row>
            <Row className={"gap-3 mt-3"}>
                {Promotions.promotions.map((item, index) => {
                    if (index < 2) {
                        return (
                            <Col className={"p-4"} style={{
                                backgroundColor: '#3E3E3E'
                            }} xl={4} lg={4} md={4} sm={12} xs={12}>
                                <h1>{item.title}</h1>
                                <div className={"border-warning border-5 border-bottom w-25"}></div>
                                <div className={"mt-2"}>{item.description}</div>
                            </Col>
                        )
                    } else if (index > 1 && index < 3) {
                        return (<Col className={"p-4"} style={{
                            backgroundColor: '#3E3E3E'
                        }} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h1>{item.title}</h1>
                            <div className={"border-warning border-5 border-bottom w-25"}></div>
                            <div className={"mt-2"}>{item.description}</div>
                        </Col>)
                    } else {
                        return (
                            <Col style={{
                                backgroundColor: '#3E3E3E'
                            }} className={"ps-0"} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Image className={"col-4 float-start"} fluid src={item.src}/>
                                <div className={"h-100 d-flex flex-column justify-content-center align-items-center"}>
                                    <div>
                                        <h3 className={"fw-bold"}>{item.title}</h3>
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
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                })}
            </Row>
        </Container>
    )
}

export default Promotions_component;