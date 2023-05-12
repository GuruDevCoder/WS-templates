/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Marionette = require('backbone.marionette'),
        //_ = require('underscore'),
        //Backbone = require('backbone'),
        JST = require('${REPO}.templates');

    /**
     * @class ${NAME}
     * @extends Marionette.Layout
     */
    return Marionette.Layout.extend({

        /** @private */
        id: '${NAME}',

        /** @private */
        className: '${NAME}',

        /** @private */
        template: JST['lib/scripts/${PATH}/templates/${NAME}.hbs'],

        /** @private */
        events: {
            'mousedown': 'clickMouse'
        },

        /** @private */
        regions: {
            firstRegion: '#first-region',
            secondRegion: '#second-region'
        },

        /** @private */
        initialize: function (options){

        },

        /** @private */
        clickMouse: function (event){
            // ...
        },

        /** @private */
        onRender: function (){
         
        }
    });
});