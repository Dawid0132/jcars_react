import {Button, Col, Form, Image} from "react-bootstrap";

const Add = (prop) => {
    return (
        <Col lg={6} xl={6} md={12} xs={12} sm={12}>
            <div style={{
                backgroundColor: "#3E3E3E",
            }} className={"d-flex flex-row p-3 h-100"}>
                <div className={"w-75 d-flex flex-column justify-content-center"}>
                    <h5 className={"fw-bold"}>{prop.add.title}</h5>
                    <p><small>{prop.add.description ? prop.add.description : ""}</small></p>
                </div>
                <div className={"d-flex flex-row justify-content-center align-items-center text-warning"}>
                    <div><small>{prop.add.price ? `${prop.add.price}zł/db` : "w cenie"}</small><Image
                        src={"/check-circle-fill.svg"}
                        className={"ms-3"}
                    /></div>
                </div>
            </div>
        </Col>
    )
}

export default Add;