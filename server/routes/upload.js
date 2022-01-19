import csv from 'csv-parser'
import busboy from 'busboy-wrapper'
import bluebird from 'bluebird'
import fs from 'fs'
import path from 'path'

const parse = file =>
  new Promise((resolve, reject) => {
    const results = []

    fs.createReadStream(file.path)
      .on('error', function (err) {
        reject(err)
      })
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => {
        resolve(results)
      })
  })

export default async (req, res, next) => {
  const tempUploadDir = path.join(process.cwd(), '../uploads')

  const { files } = await busboy(req, { tempUploadDir })
  console.log('paksnf dojna')

  let response = null

  console.log(files, '----------')

  try {
    response = await bluebird.map(Object.values(files), parse)
  } catch (err) {
    console.log('Error', err)
  }

  res.json({ response })
}
