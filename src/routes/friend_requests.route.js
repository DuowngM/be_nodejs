const {
  getFriendRequests,
  createdFriendRequest,
  getFriendSent,
  getSuggestsFriends,
} = require('../controllers/friend_requests.controller')

const friendRequestsRouter = (app) => {
  app.get('/api/friends/requests/:id', getFriendRequests)
  app.get('/api/friends/sent/:id', getFriendSent)
  app.get('/api/friends/suggests_friends/:user_id', getSuggestsFriends)
  app.post('/api/friends/addFriend', createdFriendRequest)
}

module.exports = {
  friendRequestsRouter,
}
