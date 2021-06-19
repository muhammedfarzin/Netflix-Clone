const constants = require("./constants/constants");

module.exports={
    Trending:`trending/all/week?api_key=${constants.API_KEY}&language=en-US`,
    Originals:`discover/tv?api_key=${constants.API_KEY}&with_networks=213`,
    Actions:`discover/movie?api_key=${constants.API_KEY}&with_genres=28`,
    Horror:`discover/movie?api_key=${constants.API_KEY}&with_genres=27`,
    Comedy:`discover/movie?api_key=${constants.API_KEY}&with_genres=35`,
    Documentaries:`discover/movie?api_key=${constants.API_KEY}&with_genres=99`,
    Fantasy:`discover/movie?api_key=${constants.API_KEY}&with_genres=14`,
    Animation:`discover/movie?api_key=${constants.API_KEY}&with_genres=16`,
    Family:`discover/movie?api_key=${constants.API_KEY}&with_genres=10751`,
    Crime:`discover/movie?api_key=${constants.API_KEY}&with_genres=80`
}