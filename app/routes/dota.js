var express = require('express');
var router = express.Router();

var Dota2Api = require('dota2-api');
var dota = Dota2Api.create('D4D36275652E46A3909DE1A8FB759901');

router.get('/topLiveGames', function(req, res, next) {
  dota.getTopLiveGame({partner: 1}).then(function(result) {
    res.json(result);
  }, function(error) {
    next(error);
  });
});

router.get('/liveLeagueGames', function(req, res, next) {
  dota.getLiveLeagueGames().then(function(result) {
    res.json(result.result);
  }, function(error) {
    next(error);
  });
});

router.get('/scheduledLeagueGames', function(req, res, next) {
  dota.getScheduledLeagueGames().then(function(result) {
    res.json(result.result);
  }, function(error) {
    next(error);
  });
});

router.get('/teamInfo', function(req, res, next) {
  dota.getTeamInfoByTeamID({start_at_team_id: 2659468, teams_requested: 10}).then(function(result) {
    res.json(result);
  }, function(error) {
    next(error);
  });
});

router.get('/tournamentPrizePool', function(req, res, next) {
  dota.getTournamentPrizePool().then(function(result) {
    res.json(result.result);
  }, function(error) {
    next(error);
  });
});

module.exports = router;
