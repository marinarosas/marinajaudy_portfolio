"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const router = useRouter();


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  function handleNavigateToAboutPage() {
    router.push(`/app/about`);
  }

  function handleNavigateToTechStackPage() {
    router.push(`/app/tech-stack`);
  }

  function handleNavigateToProjectsPage() {
    router.push(`/app/projects-page`);
  }

  function handleNavigateToContactPage() {
    router.push(`/app/contact`);
  }

  return (
    <header className="h-20 sticky bg-white text-gray-500 shadow-sm">
      {/* WEB */}
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8 h-20 font-sans text-lg"
        aria-label="Global"
      >
        <div className="flex w-1/12 h-20 items-center justify-center">
          <a
            className="text-3xl font-bold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500"
            onClick={() => {
              handleNavigateToHomePage();
            }}
          >
            {"{MJ}"}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="
            -m-2.5 
            inline-flex 
            items-center 
            justify-center 
            rounded-md 
            p-2.5 
            text-gray-700
            "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen && (
              <Bars3Icon
                className="h-6 w-6 border-transparent hover:cursor-pointer"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12 h-20 w-7/12 items-center">
          <a
            href="#homepage"
            className="text-md font-light leading-6 text-gray-400 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToHomePage();
            }}
          >
            Home
          </a>
          <a
            // href="#aboutus"
            className="text-md font-light leading-6 text-gray-400 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToAboutPage();
            }}
          >
            About
          </a>
          <a
            // href="#ourpartnership"
            className="text-md font-light leading-6 text-gray-400 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToTechStackPage();
            }}
          >
            Tech Stack
          </a>
          <a
            href="#project"
            className="text-md font-light leading-6 text-gray-400 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToProjectsPage();
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-md font-light leading-6 text-gray-400 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToContactPage();
            }}
          >
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex justify-between items-center w-2/12 pr-8">
          <a href="https://github.com/marinajaudy" target="_blank">
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/marina-jaudy-599b11a9/"
            target="_blank"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="#" target="_blank">
            <FaInstagramSquare size={32} />
          </a>
        </div>
      </nav>

      {/* MOBILE */}
      <Dialog
        as="div"
        className="lg:hidden bg-white"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-background text-foreground">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Nav Text */}
              <div className="space-y-2 py-6">
                <a
                  href="#homepage"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-50"
                  onClick={() => handleNavigateToHomePage()}
                >
                  Home
                </a>
                <a
                  href="#aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-50"
                  onClick={() => handleNavigateToAboutPage()}
                >
                  Sobre
                </a>
                <a
                  href="#ourpartnership"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-50"
                  // onClick={() => handleNavigateToHomePage("#ourpartnership")}
                >
                  Tech Stack
                </a>
                <a
                  href="#ourpartnership"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-50"
                  // onClick={() => handleNavigateToHomePage("#ourpartnership")}
                >
                  Projetos
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-50"
                  // onClick={() => handleNavigateToHomePage("#contact")}
                >
                  Contato
                </a>
              </div>
              <div className="flex justify-center items-end h-72 w-full">
                <div className="flex justify-between items-center w-1/2">
                  <a href="https://github.com/marinajaudy" target="_blank">
                    <FaGithub size={32} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marina-jaudy-599b11a9/"
                    target="_blank"
                  >
                    <FaLinkedin size={32} />
                  </a>
                  <a href="#" target="_blank">
                    <FaInstagramSquare size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
