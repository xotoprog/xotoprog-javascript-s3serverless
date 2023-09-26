"use strict";

const fs = require("fs");
const papa = require("papaparse");

module.exports.handler = async (event) => {
  const stage = process.env.STAGE;
  const file = fs.createReadStream(`books-to-list-${stage}.csv`);
  const jsonData = await toJSON(file);
  console.log("json stringify : ", JSON.stringify(jsonData));
  return jsonData;
};

const toJSON = (csv) => {
  return new Promise((resolve, reject) =>  papa.parse(csv, { header: true, complete: (results) => resolve({ data: results.data }), error: (error) => reject(error) }));
};
