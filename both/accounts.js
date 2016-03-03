AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    // sendVerificationEmail: false,
    sendVerificationEmail: true,

    // Appearance
    showForgotPasswordLink: true,
    showLabels: false,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: false,
    positiveFeedback: false,

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 2000,

    texts: {
        // button: {
        //     signUp: "Register Now!"
        // },
        socialSignUp: "",
        socialSignIn: "",
        socialWith: "",
        sep: "O",

        signInLink_pre: "¿Ya tienes una cuenta?",
        signInLink_link: "ingresar",
        signInLink_suff: "",
        signUpLink_pre: "¿No tienes una cuenta?",
        signUpLink_link: "registrarse",
        signUpLink_suff: "",
        // title: {
        //     forgotPwd: "Recover Your Password"
        // },
        
        pwdLink_link: "¿Olvidaste tu contraseña?",
        // pwdLink_pre: "¿Olvidaste tu contraseña?",

        title: {
            signIn: "",
            signUp: "",
        },

        button: {
          signUp: "Registrarse",
          signIn: "Ingresar",
          forgotPwd: "Enviar Link",
        },
    }
});


AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");
AccountsTemplates.configureRoute("signIn", {
    name: 'signIn',
    path: '/sign-in',
    redirect: '/',
});
AccountsTemplates.configureRoute("signUp", {
    name: 'signUp',
    path: '/sign-up',
    redirect: '/profile',
});
AccountsTemplates.configureRoute("verifyEmail");
