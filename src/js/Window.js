'use strict';

const remote = window.require('electron').remote;
const dialog = remote.dialog;

const Window = {
    init: function() {
        this.window = remote.getCurrentWindow();
    },

    maximize: function() {
        if (this.window.isMaximized()) {
            this.unmaximize();
        }
        else {
            this.window.maximize();
        }
    },

    minimize: function() {
        this.window.minimize();
    },

    unmaximize: function() {
        this.window.unmaximize();
    },

    openDevTools: function() {
        this.window.openDevTools({ detach: true });
    },

    reload: function() {
        this.window.reload();
    },

    close: function() {
        this.window.close();
    },

    showOpenDialog: function(action) {
        dialog.showOpenDialog(this.window, action);
    },

    showSaveDialog: function(path, action) {
        dialog.showSaveDialog(this.window, { defaultPath: path }, action);
    }
};

module.exports = Window;