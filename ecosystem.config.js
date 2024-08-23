module.exports = {
    apps: [
        /*{
            name: "user-management-app",
            script: "./src/server.js",
            instances: 2,
            exec_mode: "cluster",
            node_args: "--inspect=0.0.0.0:9229",
            env: {
                NODE_ENV: 'development',
                PORT: 3000,
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
        },*/
        {
            name: "user-management-app",
            script: "./src/server.js",
            instances: 1,
            exec_mode: "fork",
            node_args: "--inspect=0.0.0.0:9229",
            env: {
                NODE_ENV: 'development',
                PORT: 3000,
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
        }
    ],
};
