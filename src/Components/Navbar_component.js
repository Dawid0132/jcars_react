import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import '../App.css';
import {useEffect, useRef, useState} from "react";

require('typeface-roboto');

function Navbar_component() {

    const [isToggle, setIsToggle] = useState(false);
    const hamburger = useRef(null);

    const text = ['Nasza flota', 'Wynajem z kierowcą', 'Promocje', 'Usługi', 'Kontakt'];
    const svg = ['/envelope-fill.svg', '/telephone-fill.svg'];


    useEffect(() => {
        function handleResize() {
            /*navbar-toggler*/
            console.log(hamburger.current.classList.contains("navbar-toggler"));
            /*if (!hamburger.current.classList.values()) {
                setIsToggle(!isToggle);
            }*/
        }

        window.addEventListener('resize', handleResize);
    })

    return (<Navbar expand={"md"} className={"bg-black"}>
        <Container fluid>
            <Navbar.Brand className={"text-white fw-bold"} href={"#"}>
                JCars
            </Navbar.Brand>
            <Navbar.Toggle ref={hamburger} className={'border-0'} aria-controls={"navbar"}><Image
                src={'/list-nested.svg'}/></Navbar.Toggle>
            <Navbar.Collapse id={"navbar"} className="justify-content-end">
                <Nav id={"text"} className={"text-center align-items-center"}
                     style={{
                         maxHeight: '300px'
                     }}>
                    {text.map((item, index) => {
                        return (<Nav.Link style={{
                            fontSize: '16px !important'
                        }} className={"text-white fw-bold me-2 "} key={index}
                                          onMouseEnter={(e) => {
                                              e.currentTarget.classList.add('border-bottom', 'border-warning', 'text-warning');
                                              e.currentTarget.classList.remove('text-white')
                                          }} onMouseLeave={(e) => {
                            e.currentTarget.classList.add('text-white');
                            e.currentTarget.classList.remove('border-bottom', 'text-warning');
                        }}>
                            <small>{item}</small>
                        </Nav.Link>)
                    })}
                    <Nav.Link><Button variant={"outline-warning"}
                                      className={"text-uppercase text-white fw-bold rounded-4"}><small>Zarezerwuj
                        online</small></Button></Nav.Link>
                    {svg.map((item, index) => {
                        return (
                            !isToggle &&
                            <Nav.Link><Button variant={"outline-warning"} className={"rounded-circle"}><Image
                                src={item} alt={`svg${index}`}/></Button></Nav.Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Navbar_component;