import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

// CONTRACT ADDRESS: 0x64aB82d6330ff3359f11D42aafE5B79D218be87a

// CONTRACT ABI:

export default function Navbar() {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" aria-label="Brand">SAIL REGISTER</Link>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
                    <Link href="create-class">Create Class</Link>
                    <Link href="create-students">Create a Student</Link>
                    <Link href="get-classes">All Classes Page</Link>
                    <Link href="get-students">All Students Page</Link>
                </div>
            </nav>
            <ConnectButton />
        </header>
    )
}