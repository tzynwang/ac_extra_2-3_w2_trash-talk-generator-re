const express = require('express')
const app = express()
const port = 3000

const trashTalk = require('./trashTalk')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const expressHandlebars = require('express-handlebars')
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  helpers: {
    ifEquals: function (title, titleToCheck) {
      return title === titleToCheck ? 'checked' : ''
    }
  }
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/generate', (req, res) => {
  const selectedTitle = req.body.title
  const sentence = trashTalk.getTrashTalk(selectedTitle)
  res.render('index', { sentence, selectedTitle })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
