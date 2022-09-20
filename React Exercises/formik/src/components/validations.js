import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email().required("Required."),
    password: yup.string().min(5, "Must be at lest five charactersss :)").required("Required."),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"Passwords are not matching.").required()
});

export default validations;