/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Marionette = require('backbone.marionette'),
    //_ = require ('underscore'),
        JST = require('${REPO}.templates');

    /**
     * @class ${NAME}
     * @extends Marionette.ItemView
     */
    return Marionette.ItemView.extend({

        /** @private */
        template: JST['lib/scripts/${PATH}/templates/${NAME}.hbs'],

        /** @private */
        tagName: 'div',

        /** @private */
        id: '${NAME}',

        /** @private */
        className: '${NAME}',

        /** @private */
        ui: {
            hook: '#selectorID'
        },

        events: {
            'click @ui.hook': 'doAction'
        },

        initialize: function (options){
            // ...
        },

        /** @private */
        onRender: function (){
            this._renderView();
        },

        /** @private */
        onShow: function (){
            // ...
        },

        /** @private */
        onClose: function (){
            // ...
        },

        /** @private */
        _renderView: function (){
            // ...
        },

        //serializeData: function () {
        //    return _.extend(this.model.toJSON(), {
        //
        //    });
        //},

        /** @private */
        doAction: function (){
            this.ui.hook.toggleClass('myClass');
        },

    });
});
