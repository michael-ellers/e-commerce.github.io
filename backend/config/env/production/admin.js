module.exports =({ env }) => {


    return {
        url: env("PUBLIC_ADMIN_URL", "/"),
        serveAdminPanel: env("PUBLIC_ADMIN_URL") == undefined,
    };
};