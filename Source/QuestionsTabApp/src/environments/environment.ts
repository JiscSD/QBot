export const environment = {
    production: false,
    apiBaseUrl: "https://jisc-qbot.azurewebsites.net/api/Request/",
    selfUrl: "https://jisc-qbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "13078afb-8687-4926-a8e7-37e99a1b6fa6",
        clientId: "47a83f7b-47f9-44da-b11e-dd6217ddab69",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
