/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    MenuIcon,
    RocketIcon,
} from "lucide-react";
import Link from "next/link";



export default function Header() {

    return (
        <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-[#FFA500]">
            <Link className="flex items-center gap-2" href="/">
                <RocketIcon className="h-6 w-6 text-white" />
                <span className="text-white font-bold text-2xl">DetectWise</span>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden bg-[#FFA500]" size="icon">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-4 p-6">
                        <Link className="font-medium hover:underline" href="#">
                            Home
                        </Link>
                        <Link className="font-medium hover:underline" href="#">
                            About
                        </Link>
                        <Link className="font-medium hover:underline" href="#">
                            Services
                        </Link>
                        <Link className="font-medium hover:underline" href="#">
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </header>)
}