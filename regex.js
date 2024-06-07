const fs = require('fs');

// Lendo o arquivo de dados
fs.readFile('duas-datas.txt', 'utf8', (err, data) => {
  return
  if (err) {
    console.error(err);
    return;
  }

  const regexs = [
    /(\d{2} de \w+ de \d{4}) (?:Diurno|Noturno)?([^0-9]+)/g,
    /(\d{2} e \d{2} de [^0-9]+ \d{4})([^0-9]+)/g
  ]

  const regex = regexs.find(regex => data.match(regex))
  const schedule = [];

  let match;
  while ((match = regex.exec(data)) !== null) {

    const date = match[1].trim();
    const servers = match[2]
      .trim()
      .replace(/ e|https:\/\/diariooficial\.defensoria\.mg\.def\.br\/ Edição de|.ATO Nº/g, '')
      .split(';')
      .map(server => server.trim().replace(/\.$/, ''))
      .sort();


    const days = date.match(/\b\d{2}\b/g);
    const monthYear = date.match(/de [^0-9]+ de \d{4}/g)[0]

    days.forEach(day => {
      schedule.push({
        date: `${day} ${monthYear}`,
        servers
      })
    })
    // console.log(date.split(/ e | de /))
  }

  // Exibindo o resultado do schedule
  console.log('Schedule:', schedule);
});
main()
async function main() {
  const files = await Promise.all([
    // fs.readFileSync('duas-datas.txt', 'utf-8'),
    fs.readFileSync('uma-data.txt', 'utf8'),
  ])

  const days = files.map(plantoes).flat()

  console.log(days[0])

  const servers = groupByName(days)

  // console.log(servers)
}

function plantoes(data) {
  const regexs = [
    /(\d{2} de \w+ de \d{4})(?:Diurno|Noturno)?([^0-9]+)/g,
    /(\d{2} e \d{2} de [^0-9]+ \d{4})([^0-9]+)/g
  ]

  const regex = regexs.find(regex => data.match(regex))
  const schedule = [];

  let match;
  while ((match = regex.exec(data)) !== null) {
    console.log(match)
    const date = match[1].trim();
    const servers = match[2]
      .trim()
      .replace(/ e|https:\/\/diariooficial\.defensoria\.mg\.def\.br\/ Edição de|.ATO Nº/g, '')
      .split(';')
      .map(server => server.trim().replace(/\.$/, ''))
      .sort();


    const days = date.match(/\b\d{2}\b/g);
    const monthYear = date.match(/de [^0-9]+ de \d{4}/g)[0]

    days.forEach(day => {
      schedule.push({
        date: `${day} ${monthYear}`,
        servers
      })
    })
  }

  return schedule
}


function groupByName(data){
 
  // console.log(data)

  const servers = data.reduce((acc, item) => {
    item.servers.forEach(server => {
      if(!acc[server]){
        acc[server] = []
      }
      acc[server].push(item.date)

    })
    return acc
  }, {})


  return Object.entries(servers).map(([name, date]) => ({name, date}))

  
}