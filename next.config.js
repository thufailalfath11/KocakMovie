const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`image.tmdb.org`,'rb.gy','drive.google.com']
  }, 
};

module.exports = withPlausibleProxy()(nextConfig);
