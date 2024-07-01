// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
   output: "export"
};

module.exports = withNextIntl(config);