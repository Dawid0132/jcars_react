import {Button, Container, Image, Nav, Navbar, NavLink} from "react-bootstrap";
import '../../../App.css';
import {useEffect, useRef, useState} from "react";
import {Navigate} from "react-router";

require('typeface-roboto');

function Navbar_component({onClick, currentUser}) {

    const [isToggle, setIsToggle] = useState(false);
    const hamburger = useRef(null);


    const text = ['Nasza flota', 'Wynajem z kierowcą', 'Promocje', 'Usługi', 'Kontakt'];
    const svg = [{
        icon: '/envelope-fill.svg', href: '/'
    }, {
        icon: '/telephone-fill.svg', href: '/'
    }, {
        icon: '/person-fill.svg', href: '/login'
    }, {
        icon: '/x-square-fill.svg', href: '/'
    }]


    useEffect(() => {
        function handleResize() {
            let style = window.getComputedStyle(hamburger.current);
            if (style.display === 'none') {
                setIsToggle(false);
            } else {
                setIsToggle(true);
            }
        }

        window.addEventListener('resize', handleResize);

    })

    return (<Navbar sticky={"top"} expand={"lg"} className={"bg-black"}>
        <Container>
            <Navbar.Brand className={"text-white fw-bold"} href={"/"}>
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
                        if (svg.length - 1 === index) {
                            return (!isToggle && currentUser &&
                                <Button onClick={onClick} id={`${index}`} variant={"outline-warning"}
                                        className={"rounded-circle me-1"}><Image
                                    src={item.icon} alt={`svg${index}`}/></Button>)
                        } else {
                            return (!isToggle &&
                                <NavLink href={item.href}><Button id={`${index}`} variant={"outline-warning"}
                                                                  className={"rounded-circle me-1"}><Image
                                    src={item.icon} alt={`svg${index}`}/></Button></NavLink>)
                        }
                    })}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Navbar_component;