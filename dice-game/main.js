'use strict';

const {app,BrowserWindow} = require("electron");
require ('electron-reload') (__dirname)

var mainWindow = null;

// Takes care of creating the browser window and loading index.html
app.on('ready', function () {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 960,
        resizable: false,
        
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});