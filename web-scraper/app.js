import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'

const app = express()

async function getLinks() {
  const url = 'https://www.techdrop.news'
  const { data } = await axios.get(url)

  const posts = []

  const $ = cheerio.load(data)

   $('.transparent').each((index, element) => {

    // const title = element.find('h2').text()
    const title = $(element).find('h2').text()
    const link = url + $(element).find('.space-y-3 > a').attr('href')

    posts.push({
      title,
      link
    })      
  })

  return posts;
}

getLinks()

app.get('/', async(req, res) => {
  const posts = await getLinks()

  res.send(posts)
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})