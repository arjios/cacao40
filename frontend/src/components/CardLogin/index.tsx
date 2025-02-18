import ButtonLogin from "../ButtonLogin";
import InputLogin from "../InputLogin";
import Formik from 'formik';
import Yup from 'yup';
import { CardContainerLogin, CardContent, CardTitle } from "./styles";

export default function CardLogin() {
    function validateForm() {
        const schema = Yup.object().shape({
            email: Yup.string.email('email invalido').required('Digite o email'),
            password: Yup.string.min(6, 'A senha deve conter no minimo 6 caracteres')
        });
    }
    return (
        <CardContainerLogin>
            <CardTitle>
                Login
            </CardTitle>
            <CardContent>
                <Formik
                    initialvalues={{ email: '', password: '' }}
                    validationSchema={validateForm}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, erros, touched }) => {

                        <CardContent>
                            <InputLogin
                                placeholder='email'
                                nameIcon='mail'
                                sizeIcon={22}
                                colorIcon='white'
                                secureType={false}>
                            </InputLogin>
                        </CardContent>
                    }
                    }
                </Formik>

            </CardContent>
            <CardContent>
                <InputLogin
                    placeholder='email'
                    nameIcon='mail'
                    sizeIcon={22}
                    colorIcon='white'
                    secureType={false}>
                </InputLogin>
            </CardContent>
            <CardContent>
                <InputLogin
                    placeholder='password'
                    nameIcon='key'
                    sizeIcon={22}
                    colorIcon='white'
                    secureType={true}>
                </InputLogin>
            </CardContent>
            <CardContent>
                <ButtonLogin>

                </ButtonLogin>
            </CardContent>

        </CardContainerLogin>
    );
}