export var EMAIL_REGEX = {
    testExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    invalidMessage: "Invalid email address",
};
export var PASSWORD_REGEX = [
    {
        testExp: /^.{8,}/,
        invalidMessage: "At least 8 characters long",
    },
    {
        testExp: /(?=.*[A-Z])/,
        invalidMessage: "At least 1 upper case letter",
    },
    {
        testExp: /\d{1}/,
        invalidMessage: "At least 1 number",
    },
    {
        testExp: /(?=.*[a-z])/,
        invalidMessage: "At least 1 lower case letter",
    },
];
