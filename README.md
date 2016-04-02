# PearlHacksWebDev2016

Adding a new user:

    adduser pearl
    adduser pearl sudo

Installing Node.js and build-essential

    curl -sL https://deb.nodesource.com/setup | sudo bash -
    sudo apt-get install nodejs
    sudo apt-get install build-essential
    sudo npm install -g express
    sudo npm install -g express-generator

Create project directory

    mkdir projects
    cd projects/

Creating Project

    express pearlhacks
    cd pearlhacks/
    npm install <- links everything for the first time
    sudo npm install -g twitter <- substitute twitter with any other module you want.
    npm link twitter <- You may need to run this if you get module not found errors
    npm start <- Starts the server at ipaddress:3000
