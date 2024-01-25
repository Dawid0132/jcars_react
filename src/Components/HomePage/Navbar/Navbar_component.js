import '../../../App.css';
import {useEffect, useRef, useState} from "react";
import {Navigate} from "react-router";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom';

require('typeface-roboto');


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar_component({onClick, currentUser}) {

    const [isToggle, setIsToggle] = useState(false);
    const hamburger = useRef(null);


    const links = [
      {text: 'Strona główna', url:'/'}, 
    {text: 'Nasza flota', url:'/cars'}, 
    {text: 'Login', url:'/login'}
  ];


        return (
          <Disclosure as="nav" className="bg-white shadow fixed w-full z-1">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 justify-between">
                    <div className="flex">
                      <div className="-ml-2 mr-2 flex items-center md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-shrink-0 items-center font-bold text-2xl pl-4 text-gray-700">
                        j<span className="text-yellow-600">Cars</span>
                      </div>
                      <div className="hidden md:ml-6 md:flex md:space-x-8">

                        {
                        links.map((item, index) => {
                            return (<a href={item.url} className={"no-underline inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"} key={index}>
                                {item.text}
                            </a>)
                        })
                        }
                       
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                          Wynajmij
                        </button>
                      </div>
                      <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                        <button
                          type="button"
                          className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
      
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://i1.sndcdn.com/artworks-RFhjHqbAAL5LzyzI-g7D9fA-t500x500.jpg"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Twój profil
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Ustawienia
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Wyloguj się
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
      
                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 pb-3 pt-2">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
                    >
                      Dashboard
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                    >
                      Team
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                    >
                      Projects
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                    >
                      Calendar
                    </Disclosure.Button>
                  </div>
                  <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">Tom Cook</div>
                        <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1">
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                      >
                        Your Profile
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                      >
                        Settings
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                      >
                        Sign out
                      </Disclosure.Button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )
      

/*
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
                    <Nav.Link href={"/cars"}><Button variant={"outline-warning"}
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
    </Navbar>)*/
}

export default Navbar_component;