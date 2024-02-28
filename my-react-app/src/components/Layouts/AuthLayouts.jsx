import { Children } from "react";

const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-800">{title}</h1>
            <p className="font-medium text-slite-500 mb-8">Yokoso, Please enter your details</p>
            {children}
        </div>
    );
};

export default AuthLayout;