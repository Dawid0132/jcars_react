import {Button, Carousel, Image} from "react-bootstrap";
import "./Header.css";

export const Carousel_header = () => {

    return (<Carousel slide={false}>
        <Carousel.Item>
            <Image fluid
                   src={"/bmw-series-7.png"}
                   aria-valuetext="First slide"/>
            <Carousel.Caption className={"ps-3 mt-3"}>
                <div className={"d-flex flex-column justify-content-start align-items-start"}>
                    <h3 className={"text-start mt-3"}>Wynajem limuzyny z kierowcą</h3>
                    <div className={"text-start mt-2"}>
                        Zadzwoń i zamów
                        luksusowy przejazd
                    </div>
                    <div className={"d-flex flex-row mt-3"}>
                        <Button className={"me-3"} variant={"warning"}>Sprawdź ofertę</Button>
                        <Button variant={"outline-warning"}>+48 777 777 777</Button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image fluid
                   src={"/mercedes.png"}
                   aria-valuetext="Second slide"/>
            <Carousel.Caption className={"ps-3 mt-3"}>
                <div className={"d-flex flex-column justify-content-start align-items-start"}>
                    <h3 className={"text-start mt-3"}>2+1 na weekend</h3>
                    <div className={"text-start mt-2"}>
                        Wypożycz auto w piątek do 18, zwróć w poniedziałek do południa i zapłać za dwie doby!
                    </div>
                    <div className={"d-flex flex-row mt-3"}>
                        <Button className={"me-3"} variant={"warning"}>Sprawdź ofertę</Button>
                        <Button variant={"outline-warning"}>+48 777 777 777</Button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className={"d-flex flex-row"}>
                <Image fluid
                       src={"/transfery_lotniskowe.png"}
                       aria-valuetext="Third slide"/>
            </div>
            <Carousel.Caption className={"ps-3 mt-3"}>
                <div className={"d-flex flex-column justify-content-start align-items-start"}>
                    <h3 className={"text-start mt-3"}>Wynajem aut sportowych</h3>
                    <div className={"text-start mt-2"}>
                        Już teraz! Wkrótce dostępne nowe BMW M340i 2023
                        Praktyczne auto o sportowym zacięciu
                    </div>
                    <div className={"d-flex flex-row mt-3"}>
                        <Button className={"me-3"} variant={"warning"}>Sprawdź ofertę</Button>
                        <Button variant={"outline-warning"}>+48 777 777 777</Button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>)
}

export default Carousel_header;