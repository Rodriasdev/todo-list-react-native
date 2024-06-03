import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('email is required'),
    password: yup
        .string()
        .min(5, 'Too long!')
        .max(1000, 'Too long!')
        .required('Password is required')
});

export const registerValidationSchema = yup.object().shape({
    name: yup
    .string()
    .required('name is required'),
    email: yup
        .string()
        .email()
        .required('email is required'),
    password: yup
        .string()
        .min(5, 'Too long!')
        .max(1000, 'Too long!')
        .required('Password is required')
});