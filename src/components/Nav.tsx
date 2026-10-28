import { Component } from "solid-js";
import MenuButton from "./MenuButton";

interface LinkProp {
  label: string;
  href: string;
}

const Link: Component<LinkProp> = (props) => {

  return (
    <li class="group cursor-pointer">
      <a href={props.href} class="text-lg text-primary-text px-6 py-2 transition-colors duration-125 rounded-full border border-primary group-hover:bg-primary group-hover:text-accent-text">
        {props.label}
      </a>
    </li>
  );
};

function Links() {

  return (
    <div class="hidden sm:flex">
      <ul class="flex flex-row gap-6 items-center justify-center">
        <Link label="Home" href="/"/>
        <Link label="About" href="/about"/>
        <Link label="Contact" href="/contact"/>
      </ul>
    </div>
  );
}

function BurgerMenu() {

  return (
    <div class="block sm:hidden">
      <MenuButton/>
    </div>
  );
}

function Logo() {
  return <a class="text-primary text-3xl font-medium cursor-pointer">Lorem</a>
}

export default function Nav() {
  return (
    <nav class="absolute w-screen h-24 flex flex-row items-center justify-between px-8 sm:px-12 bg-material">
      <Logo/>
      <Links/>
      <BurgerMenu/>
    </nav>
  );
}
