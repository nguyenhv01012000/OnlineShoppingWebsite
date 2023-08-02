import React, { Component } from 'react';
import '../../App.css';

class GoogleMap extends Component {
    render() {
        return (
            <div className="google-map">
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.63405188762!2d105.84006867595478!3d21.007301388514033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71294bf0ab%3A0xc7e2d20e5e04a9da!2zxJDhuqFpIEjhu41jIELDoWNoIEtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1690626996876!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    aria-hidden="false" 
                    tabIndex="0"/>
            </div>
        );
    }
}

export default GoogleMap;