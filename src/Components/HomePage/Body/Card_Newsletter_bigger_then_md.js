import {Button, Col, Form, Image} from "react-bootstrap";

const Card_Newsletter_bigger_then_md = (prop) => {
    return (
        <Col style={{
            backgroundColor: '#3E3E3E'
        }} className={"ps-0"} xl={12} lg={12} md={12} sm={12} xs={12}>
            <Image className={"col-4 float-start"} fluid src={prop.item.src}/>
            <div className={"h-100 d-flex flex-column justify-content-center align-items-center"}>
                <div>
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
                </div>
            </div>
        </Col>
    )
}

export default Card_Newsletter_bigger_then_md;