"# remote-debug-nodejs-express-mongo-pm2-poc" 

# 1. Local Code `Run` without `PM2`:

    cmd:\> npm start
    --or--
    cmd:\> node run dev
    --or--
    cmd:\> node --inspect=0.0.0.0:9229 src/server.js

    ## Local Code Run Debug Enable:

    ### Step: 1 - `Application Run`
        cmd:\> node run debug

    ### Step: 2 - `Attach to Node.js Remote bebugging local`
        Goto: vscode debug plugin and project .vscode/launch.json 

# 2. Local Code `Run` with `PM2`:

    ### Way: 1 - `Without PM2 config file`
        cmd:\> pm2 start ./src/server.js --name "user-management-app" --env production --node-args="--inspect=0.0.0.0:9229"
        --or--
        cmd:\> pm2 start ./src/server.js --name "user-management-app" -i 2 --env production --node-args="--inspect=0.0.0.0:9229"
        --or--
        cmd:\> pm2 start ./src/server.js --name "user-management-app" -i max --env production --node-args="--inspect=0.0.0.0:9229"

    ### Way: 2 - `With PM2 config file`
        cmd:\> pm2 start ecosystem.config.js --env production

    ## Local Code Run Debug Enable:

    ### Step: 1 - `Application Run`
        cmd:\> node run debug

    ### Step: 2 - `Attach to Node.js Remote bebugging local`
        Goto: vscode debug plugin and project .vscode/launch.json 

## PM2 other commands 
    cmd:\> pm2 logs user-management-app
    cmd:\> pm2 stop user-management-app
    cmd:\> pm2 remove user-management-app
    cmd:\> pm2 restart user-management-app

# 3. Build `Docker Image`:
    cmd:\> docker build -f Dockerfile -t user-management-app:v1 .

# 4. Run `Docker Compose Script`
    cmd:\> docker-compose up -d

    ## Local Code Run Debug Enable:

    ### Step: 1 - `Application Run`
        cmd:\> node run debug

    ### Step: 2 - `Attach to Node.js Remote bebugging host`
        Goto: vscode debug plugin and project .vscode/launch.json 
