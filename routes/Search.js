const express = require('express')
const Search = express.Router()
const ytsr = require('ytsr');

Search.get('/:parameter', async (req, res) => {
    const Query=req.params.parameter
    const Result = []
    const searchResults = await ytsr(Query);
    const Data = searchResults.items
    Data.map((item) => {
        const Type = item.type
        if (Type === "video") {
            // const Name = item.author.name
            const Verify=item.author.verified
            const isLive = item.isLive
            const isUpcomming = item.isUpcoming
            if ( Verify && !isLive && !isUpcomming) {
                Result.push(item)
            }
            // (Name === "T-Series" || Name === "Zee Music Company" || Name === "Lo-fi 2307" || Name === "7clouds Rock" || Name === "Twilight Sounds") &&
        }
    })
    res.send(Result)
})

module.exports = Search