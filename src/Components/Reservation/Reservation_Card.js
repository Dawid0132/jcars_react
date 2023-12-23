import {Card, ListGroup} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {forEach} from "react-bootstrap/ElementChildren";
import {useSelector} from "react-redux";


const getTotalKmLimit = (days, limits) => {
    let limitTotal = 0;
    const daysTotal = days;

    limits.forEach((limit) => {
        if (days < 7) {
            if (limit.name === "dzien") {
                for (let i = 0; i < days; i++) {
                    limitTotal += limit.car_limit
                }
            }
        } else if (days >= 7 && days < 14) {
            if (limit.name === "dzien") {
                for (let i = 7; i < days; i++) {
                    limitTotal += limit.car_limit
                }
            } else if (limit.name === "tydzien") {
                limitTotal += limit.car_limit;
            }
        } else if (days >= 14 && days < 30) {
            if (limit.name === "dzien") {
                for (let i = 14; i < days; i++) {
                    limitTotal += limit.car_limit
                }
            } else if (limit.name === "2tygodnie") {
                limitTotal += limit.car_limit;
            }
        } else if (days >= 30 && days < 365) {
            let temp;
            const month = Math.floor(daysTotal / 30);
            temp = daysTotal - month * 30;
            const two_weeks = Math.floor(temp / 14);
            temp = daysTotal - (month * 30) - (two_weeks * 14);
            const weeks = Math.floor(temp / 7);
            temp = daysTotal - (month * 30) - (two_weeks * 14) - (weeks * 7);
            const days = temp / temp;
            if (month > 0) {
                if (limit.name === "miesiecznie") {
                    for (let i = 0; i < month; i++) {
                        limitTotal += limit.car_limit;
                    }
                }
            } else if (two_weeks > 0) {
                if (limit.name === "2tygodnie") {
                    for (let i = 0; i < two_weeks; i++) {
                        limitTotal += limit.car_limit;
                    }
                }
            } else if (weeks > 0) {
                if (limit.name === "tydzien") {
                    for (let i = 0; i < weeks; i++) {
                        limitTotal += limit.car_limit;
                    }
                }
            } else if (days > 0) {
                if (limit.name === "dzien") {
                    for (let i = 0; i < days; i++) {
                        limitTotal += limit.car_limit;
                    }
                }
            }
        } else {
            if (limit.name === "rocznie") {
                limitTotal += limit.car_limit;
            }
        }
    })
    return limitTotal;
};

const getCountOfAdds = (adds) => {
    const all = adds;
    let sum = 0;
    all.forEach((add) => {
        if (add.price !== null) {
            sum += add.price;
        }
    })
    return sum;
}

const getTotal = (adds, daysTotal, rentalPrice) => {
    let total = 0;
    const addsTotal = getCountOfAdds(adds);
    const dayTotal = daysTotal > 0 ? daysTotal : 1;
    for (let i = 0; i < dayTotal; i++) {
        total += rentalPrice;
    }
    total += addsTotal;
    return total;
}

const Reservation_Card = (prop) => {

    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    const [days, setDays] = useState(1);

    const [limit, setLimit] = useState(200);

    const [total, setTotal] = useState(0);

    const [addsTotal, setAddsTotal] = useState(0);

    const adds = useSelector((state) => state.adds.adds);

    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
    }

    useEffect(() => {
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = endDate.getTime() - startDate.getTime();

        const daysTotal = Math.round(diffInTime / oneDay);

        const limitTotal = getTotalKmLimit(daysTotal, prop.limit);

        const addsTotal = getCountOfAdds(adds);

        const total = getTotal(adds, daysTotal, prop.car.rentalPrice);

        setLimit(limitTotal);
        setAddsTotal(addsTotal);
        setDays(daysTotal);
        setTotal(total);
    })


    return (<Card style={{
        backgroundColor: "#3e3e3e", width: '18rem'
    }} className={"text-white"}>
        <Card.Img variant={"top"} src={prop.car.imageUrl}/>
        <Card.Body>
            <Card.Title>{`${prop.car.model.brand.name} ${prop.car.model.name}`}
                <div className={"border-5 border-bottom border-warning w-25"}></div>
            </Card.Title>
            <div className={"d-flex flex-column gap-3 mt-3"}>
                <DatePicker
                    /*closeOnScroll={true}*/
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    /*showTimeSelect
                    timeClassName={handleColor}*/
                />
                <DatePicker
                    /*closeOnScroll={true}*/
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    /*showTimeSelect
                    timeClassName={handleColor}*/
                />
            </div>
            <ListGroup className="list-group-flush gap-3 mt-3">
                <ListGroup.Item style={{
                    backgroundColor: "#3e3e3e"
                }}>
                    <div className={"text-white d-flex flex-row justify-content-between"}>
                        <div>
                            Doby
                        </div>
                        <div className={"text-warning"}>
                            {days > 0 ? days : "1"}
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item style={{
                    backgroundColor: "#3e3e3e"
                }}>
                    <div className={"text-white d-flex flex-row justify-content-between"}>
                        <div>
                            Cena za dobę
                        </div>
                        <div className={"text-warning"}>
                            {prop.car.rentalPrice} zł
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item style={{
                    backgroundColor: "#3e3e3e"
                }}>
                    <div className={"text-white d-flex flex-row justify-content-between"}>
                        <div>
                            Kaucja zwrotna
                        </div>
                        <div className={"text-warning"}>
                            {prop.car.deposit} zł
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item style={{
                    backgroundColor: "#3e3e3e"
                }}>
                    <div className={"text-white d-flex flex-row justify-content-between"}>
                        <div>
                            Całkowity limit km
                        </div>
                        <div className={"text-warning"}>
                            {limit > 0 ? limit : "200"} km
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item style={{
                    backgroundColor: "#3e3e3e"
                }}>
                    <div className={"text-white d-flex flex-row justify-content-between"}>
                        <div>
                            Opcje dodatkowe łącznie
                        </div>
                        <div className={"text-warning"}>
                            {addsTotal} zł
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item style={{
                    backgroundColor: "#3e3e3e"
                }}>
                    <div className={"text-white d-flex flex-row justify-content-between"}>
                        <div className={"text-uppercase fw-bold"}>
                            Do zapłaty
                        </div>
                        <div className={"text-warning"}>
                            {total > 0 ? total : prop.car.rentalPrice} zł
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>)
}

export default Reservation_Card;