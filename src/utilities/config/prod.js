// PRODUCTION KEYS - Reference global keys set in Netlify
module.exports = {
    googleMapsAPIKey: process.env.GOOGLE_MAPS_API_KEY,
    bridgeInteractiveAPIServerToken: process.env.BRIDGE_INTERACTIVE_API_SERVER_TOKEN,
    bridgeInteractiveAPIClientSecret: process.env.BRIDGE_INTERACTIVE_API_CLIENT_SECRET,
    bridgeInteractiveAPIBrowserToken: process.env.BRIDGE_INTERACTIVE_API_BROWSER_TOKEN,
    bridgeInteractiveAPIClientID: process.env.BRIDGE_INTERACTIVE_API_CLIENT_ID,
    MLSDataSet: process.env.MLS_DATASET,
    redirectDomain: process.env.REDIRECT_DOMAIN
};