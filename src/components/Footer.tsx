import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full bg-neutral-900 py-5 px-8 text-lg">
            <div className="flex justify-between w-full">
                <Link to="/"><span>Home</span></Link>
                <p>© {new Date().getFullYear()} Moaesaycto</p>
                <Link to="/help"><span>Help</span></Link>
            </div>
        </div>
    )
}

export default Footer;