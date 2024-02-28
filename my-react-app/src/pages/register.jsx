import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = (props) => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    );
};

export default RegisterPage;