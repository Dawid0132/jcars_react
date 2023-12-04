import {Col, Container, Image, Row} from "react-bootstrap";
import Service from "../../../Data_jsons/services.json";
import "./Services.css";

const Services_component = () => {
    return (<Container className={"mt-5 text-white"}>
        <Row className={"gap-3"}>
            <div className={"col-12 border-5 border-start border-warning"}>
                <h1 className={"ps-3"}>Nasze usługi</h1></div>
            <Col className={"mb-3"} xl={6} lg={6} sm={12} md={6} xs={12}>Oprócz możliwości codziennego poruszania się autami premium,
                oferujemy Ci także usługi przewozów VIP.
                Chcemy sprawić, by podróżowanie autami najwyższych segmentów kojarzyło się nie tylko z luksusem, ale
                i wygodą. Dlatego chętnie dostosujemy swoją ofertę do Twoich potrzeb – sprawdź nas!</Col>
        </Row>
        {Service.service.map((item, index) => {
            if (index % 2 === 0) {
                return (<a style={{
                    color: "white",
                    textDecoration: "none"
                }} href={"#"}>
                    <Row className={"row-gap-3"}>
                        <Col className={"d-flex flex-column align-items-start justify-content-center"} xl={6}
                             lg={6}
                             sm={12} md={6} xs={12}>
                            <h1>{item.name}</h1>
                            <div className={"border-5 border-warning border-bottom w-25"}></div>
                        </Col>
                        <Col xl={6} lg={6} sm={12} md={6} xs={12}>
                            <Image style={{
                                width: "400", height: "300"
                            }} fluid src={item.src}/>
                        </Col>
                    </Row>
                </a>)
            } else {
                return (<a style={{
                    color: "white",
                    textDecoration: "none"
                }} href={"#"}><Row className={"row-gap-3"}>
                    <Col xl={6} lg={6} sm={12} md={6} xs={12}>
                        <Image style={{
                            width: "400", height: "300"
                        }} fluid src={item.src}/>
                    </Col>
                    <Col className={"d-flex flex-column align-items-start justify-content-center"} xl={6}
                         lg={6}
                         sm={12} md={6} xs={12}>
                        <h1>{item.name}</h1>
                        <div className={"border-5 border-warning border-bottom w-25"}></div>
                    </Col>
                </Row></a>)
            }
        })}
    </Container>)
}

export default Services_component;