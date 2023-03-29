'use strict';

/**
 * tel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tel.tel');
