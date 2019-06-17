const API_BASE = '/api'
const db = require('../db')

module.exports = function(app) {
    app.get(`${API_BASE}/characters`, (req, res) => {
        const query = db.getCharacters()
        res.json(query)
    }),
    app.get(`${API_BASE}/characters/:slug`, (req, res) => {
        const query = db.getCharacterBySlug(req.params.slug)
        res.json(query)
    })
}
