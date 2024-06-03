import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Debe ser un correo electrónico válido')
        .required('El correo electrónico es requerido'),
    password: yup
        .string()
        // .min(5, 'La contraseña debe tener al menos 5 caracteres')
        // .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
        // .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
        // .matches(/[@$!%*?&]/, 'La contraseña debe contener al menos un símbolo')
        // .required('La contraseña es requerida')
});

export const registerValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(5, 'El nombre debe tener al menos 5 caracteres')
        .max(10, 'El nombre no puede tener más de 10 caracteres')
        .required('El nombre es requerido'),
    email: yup
        .string()
        .email('Debe ser un correo electrónico válido')
        .required('El correo electrónico es requerido'),
    password: yup
        .string()
        .min(5, 'La contraseña debe tener al menos 5 caracteres')
        .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
        .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
        .matches(/[@$!%*?&]/, 'La contraseña debe contener al menos un símbolo')
        .required('La contraseña es requerida')
});
