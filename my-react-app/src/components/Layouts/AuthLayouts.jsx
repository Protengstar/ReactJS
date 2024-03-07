import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
    const { children, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    {
        console.log(isDarkMode);
    }
    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
            <div className="w-full max-w-xs">
                <button className={`absolute right-2 top-2 font-semibold bg-black p-2 text-white rounded ${isDarkMode && "bg-white text-slate-950"}`}
                onClick={() => setIsDarkMode(!isDarkMode)}
                >{isDarkMode ? "Light" : "Dark"}</button>
                <h1 className="font-bold text-5xl mb-2 text-blue-800">{title}</h1>
                <p className={`font-medium text-slite-500 mb-6 ${isDarkMode && "text-white"}`}>Yokoso, Please enter your details...</p>
                {children}
                <Navigation type={type}/>
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm font-semibold mt-3 text-center">
                Don't have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">Register!</Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm font-semibold mt-3 text-center">
                Have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">Log in!</Link>
            </p>  
        );
    }
};


export default AuthLayout;