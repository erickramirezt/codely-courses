import 'dotenv/config'

import app from './app'

const server = app.listen(app.get('port'), () => {
	// console.log(`Server is running on port ${app.get('port')}`)
})

export default server
