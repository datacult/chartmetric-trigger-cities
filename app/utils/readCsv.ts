import fs from 'fs';
import { parse } from 'csv-parse';

const readCsv = (filePath: string) => {
  return new Promise((resolve, reject) => {
    const records: any[] = [];
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true, delimiter: ',' }))
      .on('data', (data) => records.push(data))
      .on('end', () => resolve(records))
      .on('error', (error) => reject(error));
  });
};

export default readCsv;
