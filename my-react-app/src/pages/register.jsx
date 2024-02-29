import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = (props) => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    );
};

export default RegisterPage;