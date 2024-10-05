const shortid = require("shortid");
const URL = require('../model/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortId = shortid.generate();

    try {
        // Create a new URL document
        const newUrl = await URL.create({
            shortId: shortId,        // Ensure this matches your schema's field
            redirectURL: body.url,   // Store the URL from the request body
            visitHistory: [],        // Initialize visit history as an empty array
        });

        // Send the shortID as the response
        return res.status(201).json({ id: shortId });
    } catch (error) {
        console.error('Error creating short URL:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function handleGetAnalytic(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory

    })
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytic
}