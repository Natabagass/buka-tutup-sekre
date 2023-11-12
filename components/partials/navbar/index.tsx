import logo from "@/public/logo.svg"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 right-0 left-0 py-8 px-16 shadow-lg mx-auto max-w-screen-2xl">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <Image src={logo} alt={'Logo BTS'} />
                    </div>

                    <div>
                        <Link href={''} className="font-bold text-xl">Monitoring</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;