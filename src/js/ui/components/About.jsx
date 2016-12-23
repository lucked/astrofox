'use strict';

const React = require('react');
const UIComponent = require('../UIComponent');
const Application = require('../../core/Application');

class About extends UIComponent {
    constructor(props) {
        super(props);

        this.state = {
            checking: false
        };
    }

    onUpdateCheck() {
        Application.checkForUpdates();
    }

    render() {
        return (
            <div className="about">
                <div><img src="images/about_banner.jpg"/></div>
                <div className="button" onClick={this.onUpdateCheck}>{'Check For Updates'}</div>
            </div>
        );
    }
}

module.exports = About;