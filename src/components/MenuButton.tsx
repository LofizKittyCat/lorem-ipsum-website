import { createSignal, Show } from "solid-js";

export default function MenuButton() {
    const [open, setOpen] = createSignal(false);

    const openMenu = () => {
        setOpen(true);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <button onClick={openMenu} class={`button-style ${open() ? "pointer-events-none" : "pointer-events-auto"}`}>
                = Menu
            </button>

            <div class={`absolute inset-0 z-100 w-screen min-h-screen pointer-events-none ${open() ? "backdrop-blur-sm bg-overlay-tint" : ""}`}>
                <div class="flex flex-row w-full h-full justify-end items-center">
                    <Show when={open()}>
                        <div class="w-1/2 h-full bg-primary flex flex-col p-4 shadow-xl">

                            <div class="flex flex-row w-full items-center justify-between">
                                <h2 class="text-accent-text text-2xl">Menu</h2>
                                <button onClick={closeMenu} class="text-accent-text text-lg">Close</button>
                            </div>
                        </div>
                    </Show>
                </div>
            </div>
        </>
    );
}