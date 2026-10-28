import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

function Left() {
  return (
    <section class="w-full h-full flex flex-col gap-8 items-start justify-center">
      <div class="flex flex-col text-start gap-2">
        <h1 class="text-7xl text-primary-text font-medium">Lorem Ipsum.</h1>
        <p class="text-xl text-secondary-text max-w-2xl md:max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, ex tempus ultrices pulvinar, risus nulla tempor sem, nec finibus nisl enim eu turpis. Pellentesque.</p>
      </div>

      <div class="w-full flex flex-row gap-2">
        <button class="button-style">Contact Us</button>
      </div>
    </section>
  );
}

function Right() {
  return (
    <section class="w-full h-full flex flex-col items-end justify-center">
      <p class="text-xl max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus maximus mauris in tempus. Sed pellentesque fringilla orci, sed mattis arcu rutrum lobortis. Duis fringilla orci eget nisl eleifend, quis porttitor velit auctor. Etiam scelerisque iaculis molestie. Cras ut metus eget libero vestibulum lobortis ac sit amet leo. Duis pellentesque, mi sed pharetra dapibus, nibh magna auctor risus, eget porta velit neque in ante. Etiam nec luctus sapien. Nunc consequat neque quis felis accumsan elementum. Nullam vel metus lacus.</p>
    </section>
  );
}

export default function Home() {
  return (
    <main class="w-screen min-h-screen flex flex-col items-center justify-center">
      <section class="w-full h-full flex flex-col sm:flex-row gap-12 items-center justify-center sm:justify-between px-12 md:px-24 xl:px-50 2xl:px-124">
        <Left/>
        <Right/>
      </section>
    </main>
  );
}
