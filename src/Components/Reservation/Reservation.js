import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import Add from "./Adds";
import Reservation_Card from "./Reservation_Card";
import {useLoaderData} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import PaymentMethod from "./PaymentMethod";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_LIST_ADD, SET_RESERVATION} from "../../Jwt/Actions/Type";
import * as yup from 'yup';
import {Formik, useFormik} from "formik";
import {number} from "yup";
import {getIn} from "formik";
import CarView from "../HomePage/Car";
import {register} from "../../Jwt/Actions/auth";
import {reservation as reservationMethod} from "../../Jwt/Actions/reservation";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import {toast} from "react-toastify";

const url = `${process.env.REACT_APP_API_HOST}`;

function yearsExpiration() {
    const years = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
        years.push(currentYear);
        currentYear = currentYear + 1;
    }
    return years;
}


const Reservation = builder => {

    const car = useLoaderData().res;

    const [successfully, setSuccessfully] = useState(false);

    const reservation = useSelector((state) => state.reservation.reservation);

    const addsAll = useSelector((state) => state.adds.adds);

    const dispatch = useDispatch();

    const [limits, setLimits] = useState([])

    const [adds, setAdds] = useState([]);

    const [paymentMethods, setPaymentMethods] = useState([{
        id: 1, name: "Płacę kartą - Niska kaucja", src: "/check-circle-fill.svg"
    }, {
        id: 2, name: "Płacę przy odbiorze", src: "/check-circle-fill.svg"
    }])

    const [paymentMethod, setPaymentMethod] = useState(0);

    const [months, setMonths] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]);

    const [years, setYears] = useState(yearsExpiration);

    const signupSchema = yup.object().shape({
        firstname: yup.string().required('Required'),
        lastname: yup.string().required('Required'),
        nip: yup.string(),
        address: yup.string().required('Required'),
        zipcode: yup.string().required('Required'),
        city: yup.string().required('Required'),
        promotioncode: yup.string(),
        phone: yup.string().required('Required'),
        email: yup.string().required('Required'),
        documentid: yup.string().required('Required'),
        personid: yup.string().required('Required'),
        carlicense: yup.string().required('Required'),
        rules: yup.bool().required().oneOf([true], 'Terms must be accepted'),
        rules_card: yup.bool().when("showCard", {
            is: true, then: () => yup.bool().required().oneOf([true], 'Terms must be accepted')
        }),
        showCard: yup.bool(),
        card: yup.object().shape({
            number: yup.number().when("showCard", {
                is: true, then: () => yup.number().required("Required").min(16).max(16)
            }), expirationMonth: yup.number().when("showCard", {
                is: true, then: () => yup.number().required("Required"),
            }), expirationYear: yup.number().when("showCard", {
                is: true, then: () => yup.number().required("Required")
            }), cvv: yup.number().when("showCard", {
                is: true, then: () => yup.number().required("Required").max(3).min(3)
            })
        })
    })

    useEffect(() => {
        dispatch({
            type: SET_RESERVATION,
            payload: {carId: car.id}
        })
    }, [car])


    async function fetchLimits() {
        await axios.get(`${url}/getlimits`).then((resp) => {
            setLimits(resp.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    async function fetchAdds() {
        await axios.get(`${url}/getAllAdds`).then((resp) => {
            setAdds(resp.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    useEffect(() => {
        fetchLimits();
        fetchAdds();
    }, [])

   // return (<CarView></CarView>);

    return (<div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={"bg-gray-900 text-white d-flex flex-column"}>
        <Formik
            validationSchema={signupSchema}
            initialValues={{
                firstname: '',
                lastname: '',
                nip: '',
                address: '',
                zipcode: '',
                city: '',
                promotioncode: '',
                phone: '',
                email: '',
                documentid: '',
                personid: '',
                carlicense: '',
                rules: false,
                rules_card: false,
                showCard: true,
                card: {
                    number: '', expirationMonth: '', expirationYear: '', cvv: ''
                }
            }} onSubmit={(values) => {
            setTimeout(() => {
                dispatch(reservationMethod(reservation, addsAll))
                    .then((x) => {
                        //window.location.reload();
                        toast.success(x, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                    })
                    .catch((errorMessage) => {
                        toast.error(errorMessage, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                    })
            }, 400);
        }}>{({handleSubmit, handleChange, values, touched, errors}) => (<Form onSubmit={handleSubmit}>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Rezerwacja</h1>
            <div className={"flex flex-col md:flex-row gap-5 mt-5"}>
                <div className={"flex flex-column gap-5 flex-grow"}>
                    <div className="flex flex-column gap-5">

                    <Row className={"gap-2"}>
                        <Col lg>

                    

                            <Form.Group>
                                <FloatingLabel label={"Imię"}
                                               controlId="floatingTextarea">
                                    <Form.Control className={""}
                                                  name={"firstname"}
                                                  value={values.firstname}
                                                  placeholder="Pierwsze imię"
                                                  onChange={(e) => {
                                                      handleChange(e)
                                                      dispatch({
                                                          type: SET_RESERVATION,
                                                          payload: {firstname: e.currentTarget.value}
                                                      })
                                                  }}
                                                  isInvalid={!!errors.firstname}
                                    />
                                </FloatingLabel>
                                <Form.Control.Feedback type={"invalid"}>{errors.firstname}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg>
                            <FloatingLabel label={"Nazwisko"}
                                           controlId="floatingTextarea1">
                                <Form.Control isInvalid={!!errors.lastname} name={"lastname"} value={values.lastname}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {lastname: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="NIP(opcjonalnie)"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.nip}</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col lg>
                            <FloatingLabel label={"Adres zameldowania"}
                                           controlId="floatingTextarea2">
                                <Form.Control isInvalid={!!errors.address} name={"address"} value={values.address}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {address: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="Adres zameldowania"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.address}</Form.Control.Feedback>
                        </Col>
                        <Col lg>
                            <FloatingLabel label={"Kod pocztowy"}
                                           controlId="floatingTextarea3">
                                <Form.Control isInvalid={!!errors.zipcode} name={"zipcode"} value={values.zipcode}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {zipcode: e.currentTarget.value}
                                                  })
                                              }} className={"bg-gray-700"} placeholder="Kod pocztowy"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.zipcode}</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col lg>
                            <FloatingLabel label={"Miejsowość"}
                                           controlId="floatingTextarea4">
                                <Form.Control isInvalid={!!errors.city} name={"city"} value={values.city}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {city: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="Miejsowość"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.city}</Form.Control.Feedback>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"Kod Stałego Klienta"}
                                           controlId="floatingTextarea5">
                                <Form.Control isInvalid={!!errors.promotioncode} name={"promotioncode"}
                                              value={values.promotioncode} onChange={(e) => {
                                    handleChange(e)
                                    dispatch({
                                        type: SET_RESERVATION, payload: {promotioncode: e.currentTarget.value}
                                    })
                                }} className={""} placeholder="Kod Stałego Klienta"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.promotioncode}</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"Telefon"}
                                           controlId="floatingTextarea6">
                                <Form.Control isInvalid={!!errors.phone} name={"phone"} value={values.phone}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {phone: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="Telefon"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.phone}</Form.Control.Feedback>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"E-mail"}
                                           controlId="floatingTextarea7">
                                <Form.Control isInvalid={!!errors.email} name={"email"} value={values.email}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {email: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="E-mail"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.email}</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"Numer prawa jazdy"}
                                           controlId="floatingTextarea8">
                                <Form.Control isInvalid={!!errors.carlicense} name={"carlicense"}
                                              value={values.carlicense} onChange={(e) => {
                                    handleChange(e)
                                    dispatch({
                                        type: SET_RESERVATION, payload: {carlicense: e.currentTarget.value}
                                    })
                                }} className={""} placeholder="Numer prawa jazdy"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.carlicense}</Form.Control.Feedback>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"Numer dokumentu tożsamości"}
                                           controlId="floatingTextarea9">
                                <Form.Control isInvalid={!!errors.documentid} name={"documentid"}
                                              className={""}
                                              value={values.documentid}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION,
                                                      payload: {documentid: e.currentTarget.value}
                                                  })
                                              }}
                                              placeholder="Numer dokumentu tożsamości"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.documentid}</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                    <Col md>
                            <FloatingLabel label={"NIP (opcjonalnie)"}
                                           controlId="floatingTextarea1">
                                <Form.Control isInvalid={!!errors.nip} name={"nip"} value={values.nip}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {nip: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="NIP (opcjonalnie)"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.nip}</Form.Control.Feedback>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"Pesel"}
                                           controlId="floatingTextarea10">
                                <Form.Control isInvalid={!!errors.personid} name={"personid"} value={values.personid}
                                              onChange={(e) => {
                                                  handleChange(e)
                                                  dispatch({
                                                      type: SET_RESERVATION, payload: {personid: e.currentTarget.value}
                                                  })
                                              }} className={""} placeholder="Pesel"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type={"invalid"}>{errors.personid}</Form.Control.Feedback>
                        </Col>
                    </Row>
                    </div>

                    <div>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Dodatkowo</p>
                        <Row className={"row-gap-3 mt-3"}>
                            {adds.map((add) => {
                                return (<Add
                                    key={add.id}
                                    add={add}
                                />)
                            })}
                        </Row>
                    </div>

                    <div>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Płatność</p>
                        <Row className={"row-gap-3 mt-3"}>
                            {paymentMethods.map((method, index) => {
                                return (<PaymentMethod
                                    key={index}
                                    method={method}
                                    isActive={paymentMethod === index}
                                    setpayment={() => {
                                        setPaymentMethod(index)
                                        values.showCard = !values.showCard
                                        dispatch({
                                            type: SET_RESERVATION,
                                            payload: {cardPay: values.showCard}
                                        })
                                    }}
                                />)
                            })}
                            {paymentMethod === 0 && (<Row>
                                <Col xl={4} lg={4} md={4}>
                                    <Form.Label htmlFor="card_number">Numer karty płatniczej</Form.Label>
                                    <Form.Control name={"card.number"} className={"p-2"}
                                                isInvalid={!!getIn(errors, 'card.number')}
                                                type="text"
                                                id="card_number"
                                                onChange={handleChange}
                                                value={values.card.number}
                                    />
                                </Col>
                                <Form.Group xl={2} lg={2} md={2} xs={5} as={Col} controlId="card_expiration">
                                    <Form.Label>Ważność</Form.Label>
                                    <Form.Select isInvalid={getIn(errors, 'card.expirationMonth')}
                                                value={values.card.expirationMonth}
                                                name={"card.expirationMonth"}
                                                onChange={handleChange} className={"p-2"}>
                                        {months.map((month) => (<option key={month}>{month}</option>))}
                                    </Form.Select>
                                </Form.Group>
                                <Col xl={1} lg={1} md={1} xs={2} className={"d-flex flex-column align-items-center justify-content-end"}>
                                    <div className={"text-3xl mb-1"}>/</div>
                                </Col>
                                <Form.Group xl={2} lg={2} md={2} xs={5} as={Col} controlId="card_expiration1"
                                            className={"d-flex flex-column align-items-end justify-content-end"}>
                                    <Form.Select isInvalid={getIn(errors, 'card.expirationYear')}
                                                value={values.card.expirationYear}
                                                name={"card.expirationYear"}
                                                onChange={handleChange} className={"p-2"}>
                                        {years.map((year) => (<option key={year}>{year}</option>))}
                                    </Form.Select>
                                </Form.Group>
                                <Col xl={2} lg={2} md={2}>
                                    <Form.Label htmlFor="cvv">Kod CVV</Form.Label>
                                    <Form.Control
                                        isInvalid={getIn(errors, 'card.cvv')}
                                        value={values.card.cvv}
                                        name={"card.cvv"} onChange={handleChange}
                                        type="text"
                                        id="cvv"
                                        className={"p-2"}
                                    />
                                </Col>
                            </Row>)}
                            {paymentMethod === 1 && (<Col>
                                <h5>Płace przy odbiorze - Akceptujemy płatności kartą, gotówką i przelewem.</h5>
                            </Col>)}
                        </Row>
                    </div>
                    <div>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Zostaw wiadomość</p>
                        <Col sm className={"mt-3"}>
                            <FloatingLabel label={"Zostaw wiadomość"}
                                        controlId="floatingTextarea7">
                                <Form.Control value={reservation.message} onChange={(e) => {
                                    dispatch({
                                        type: SET_RESERVATION, payload: {message: e.currentTarget.value}
                                    })
                                }} style={{
                                    height: "200px"
                                }} className={""} placeholder="Zostaw wiadomość"/>
                            </FloatingLabel>
                        </Col>
                        <div className={"d-flex flex-column gap-3 mt-3 mb-3"}>
                            <Form.Check
                                name={"rules"}
                                onChange={handleChange}
                                type="switch"
                                id="custom-switch"
                                label="Znam i akceptuję regulamin oraz politykę prywatności JCars"
                                isInvalid={!!errors.rules}
                                feedback={errors.rules}
                            />
                            <Form.Check
                                disabled={!values.showCard}
                                name={"rules_card"}
                                onChange={handleChange}
                                type="switch"
                                label="Wyrażam zgodę na obciążenie mojej karty płatniczej kosztem najmu oraz kosztem przyszłych transakcji."
                                id="disabled-custom-switch"
                                feedback={errors.rules_card}
                                isInvalid={!!errors.rules_card}
                            />
                        </div>
                        <div className={"d-flex flex-row justify-content-start"}> 
                            <button type="submit" onClick={handleSubmit} class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Rezerwacja</button>
                        </div>
                    </div>




                </div>




                <div className={"flex flex-row justify-content-end w-full md:w-50"}>
                    <Reservation_Card
                        car={car}
                        limit={limits}
                    />
                </div>
            </div>

        </Form>)}
        </Formik>
    </div>
        </div>
    </div>)
}


export const loader = async ({params}) => {
    const res = await axios.get(`${url}/cars/${params.id}`)
        .then((resp) => {
            return resp.data;
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    return {res}
}

export default Reservation;