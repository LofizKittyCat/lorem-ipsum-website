import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

function Left() {
  return <section></section>
}

function Right() {
  return <section></section>
}

export default function About() {
  return (
    <main class="w-screen min-h-screen flex flex-col items-center justify-center">
      <section class="w-full h-full flex flex-row items-center justify-between px-24">
        <Left/>
        <Right/>
      </section>
    </main>
  );
}
