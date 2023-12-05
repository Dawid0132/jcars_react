import {Button, Col, Form, Image, Row} from "react-bootstrap";

const Card_car_bigger_then_md = (prop) => {


    return (<Col style={{
        backgroundColor: '#3E3E3E'
    }} className={"ps-0 text-white"} xl={12} lg={12} md={12} sm={12} xs={12}>
        <Image className={"col-4 float-start"} fluid src={prop.car.src}/>
        <div className={"d-flex flex-row p-2"}>
            <div className={"h-100 w-75 d-flex flex-column justify-content-center align-items-start"}>
                <div>
                    <h4 className={"fw-bold"}>{prop.car.name}</h4>
                    <div
                        className={"border-warning border-5 border-bottom w-25 align-self-start"}></div>
                </div>
                <div className={"d-flex flex-wrap align-content-between"}>
                    {Object.keys(prop.car).map((key, i) => {
                        if (key !== 'name' && key !== 'src' && key !== 'price') {
                            if (typeof prop.car[key] === "boolean") {
                                if (prop.car[key]) {
                                    return (<div
                                        className={"fw-bold border-5 border-start border-warning mt-3 ps-1 text-uppercase me-2"}>
                                        <small>{key}</small>
                                    </div>)
                                }
                            } else {
                                return (<div className={"fw-bold border-5 border-start border-warning mt-3 ps-1 text-uppercase me-2"}>
                                    <small>{prop.car[key]}</small></div>)
                            }
                        }
                    })}
                </div>
            </div>
            <div className={"d-flex flex-column justify-content-center w-25"}>
                <div className={"text-warning h5 fw-bold mb-5 align-self-end"}>od {prop.car.price} zł/db</div>
                <Button className={"mb-2"} variant={"warning"}>Poznaj szczegóły</Button>
                <Button variant={"outline-warning"}>Zerezerwuj</Button>
            </div>
        </div>
    </Col>)
}

export default Card_car_bigger_then_md;