import Image from "next/image";
import logo from "@/public/logoWhite.svg"

const Footer = () => {
    return (
        <>
            <div className="bg-navy w-full mx-auto  max-w-screen-2xl bottom-0 right-0 left-0 h-full">
                <div className="flex flex-col py-10 px-16">
                    <div className="mb-5">
                        <Image src={logo} alt="logo" />
                    </div>
                    <h1 className="text-n10 text-sm w-[50%]">
                        Frasakan merupakan aplikasi penulisan dan pengecekan tatanan kata dengan batntuan teknologi Ai  di bawah naungan perusahaan start up Torche Education
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Footer;