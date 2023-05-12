/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Backbone = require('backbone');

    /**
     * @class ${NAME}
     * @extends Backbone.Model
     */
    return Backbone.Model.extend({

        /** @private */
        initialize: function (){
            this.on('change', this.onChanged);
        },

        /** @private */
        defaults: {

        },

        /** @private */
        url: function (){
            return 'yourpath/${NAME}.json';
        },

        /** @private */
        onChanged: function (){
            //...
        }
    });
});