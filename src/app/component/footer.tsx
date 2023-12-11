import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
    return (
        <div className="bg-blue-50 ">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image
                            src={require("../../../public/pictures/logo.jpg")}
                            alt="ali"
                            width={100}
                            height={100}
                            className="w-[44px]"
                        />
                        <span className="ml-3 text-xl">ALI BILAL</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2023 ALI BILAL

                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                            target="blank"
                            href={"https://www.facebook.com/profile.php?id=100056790431284&mibextid=ZbWKwL"} className="text-gray-500">
                            <BsFacebook className="text-2xl hover:text-[blue]" />
                        </Link>

                    </span>
                </div>
            </footer>

        </div>
    )

}
export default Footer