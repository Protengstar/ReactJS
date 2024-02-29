import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = (props) => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="text-sm mt-3 text-center">Have an account?{" "}<Link to="/login" className="font-bold text-blue-600">Sign In!</Link></p>
        </AuthLayout>
    );
};

export default RegisterPage;