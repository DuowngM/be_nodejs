const {
  getStoryById,
  createStoryByUser,
  getStoryByUser,
} = require('../controllers/stories.controller')

const storiesRouter = (app) => {
  app.get('/api/stories/:id', getStoryById)
  app.get('/api/stories/user_stories/story', getStoryByUser)
  app.post('/api/stories', createStoryByUser)
}

module.exports = {
  storiesRouter,
}
