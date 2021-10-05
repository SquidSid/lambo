// run with yarn run gen in the parent directory

import * as fs from 'fs'
import ora from 'ora';
import tpl from './asset-template.js'

const spinner = ora('Reading CSV file').start();
const tplc = JSON.stringify(tpl)
const csv = fs.readFileSync('./lambos-211004-001.csv').toString().split("\r\n")
const columns = [ 'Brand', 'Model', 'Color', 'Background', 'Reflection', 'Skytype', 'Driver' ];
const traits = columns.slice(1)
// console.log('columns:', columns)
// console.log('traits:', traits)

let counter = 0;
spinner.text = 'Generating JSON'
csv.forEach( (line, i) => {
  const parts = line.trim().split(',')  
  const data = JSON.parse(tplc)
  const num = i + 1;
  
  data.name = `${parts[0]} ${parts[1]} #${num}`

  data.attributes = []
  let rest = [...parts].slice(1)
  // data.symbol = rest
  rest.forEach( (attr, j) => {
    if( attr !== '' ){
      data.attributes.push({
        "trait_type": traits[j],
        "value": attr
      })
    }
  })
  
  spinner.text = `${num} ${parts[0]} ${parts[1]}`
  // console.log( num, parts, data )
  fs.writeFileSync(`./assets-wip/${num}.json`, JSON.stringify(data, null, '  ')) 
  spinner.render()
  counter ++;
})
spinner.text = `Generated ${counter} JSON files in ./assets`
spinner.succeed()