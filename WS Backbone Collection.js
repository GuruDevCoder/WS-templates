/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Backbone = require('backbone'),
        ${ModelName} = require('../models/${ModelName}');

    /**
     * @class ${NAME}
     * @extends Backbone.Collection
     */
    return Backbone.Collection.extend({

        /** @private */
        initialize: function (models, options){
            //initialize
        },

        /** @private */
        url: function (){
            return '${ENDPOINT}'
        },

        /** @private */
        model: ${ModelName},

        /** @private */
        parse: function (response){
            return _.map(response.content, function (content){
                return content;
            });
        }
    });
});
