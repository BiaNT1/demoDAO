const routes = require('next-routes')()

routes
.add('/Votecb/contribute', 'Votecb/index')
.add('/create','/CreateIdea')

module.exports = routes;