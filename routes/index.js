var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pearlhacks', function(req, res, next) {
	res.render('hello', {title: 'Pearl Hacks'});
});
var client = new Twitter({
  consumer_key: 'fnuusoW4GhShC2DSTeWELheYo',
  consumer_secret: '003tutxoT0y0C3woqRSZVBt5of4PlHgcqk29iCMdA08ILM17cQ',
  access_token_key: '259352923-KBtbpBrfE6gdc15nyjFEiU89En3zk5BwzR9pGYxx',
  access_token_secret: 'HcdMl3gLAwnYtNcZgUKwyrycAuepJWZk2qgAGqHf1OAi8'
});
router.get('/update', function(req, res, next) {
  client.post('statuses/update', {status: 'I Love Pearl Hacks!'},  function(error, tweet, response){
  	if(error) throw error;
  	console.log(tweet);  // Tweet body. 
  	console.log(response);  // Raw response object. 
  	res.send("Finished tweeting!");
  });
});

module.exports = router;
