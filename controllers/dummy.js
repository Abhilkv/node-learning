const Product = require('../models/product');
const fetch = require('cross-fetch')
const data = require('../data/dummy');


exports.getDetails = (req, res, next) => {
  const count = req.query?.count;
  console.log(req.query)
  const skip = req.query?.skip;
  const field = req.query?.field;
  const sortingField = req.query?.sortingField;
  const sortingOrder = req.query?.order;
  const searchKey = (req.query?.searchKey || '').toLowerCase();
  const totalCount = data.length;
  console.log(sortingField)
  if (searchKey && field) {
    const filteredData = data.filter((item) => ((item[field]).toLowerCase()).includes(searchKey));
    res.status(200).send({ value: filteredData.slice(Number(skip), (Number(skip)+Number(count))), totalCount: filteredData.length })
  } else if (searchKey && !field) {
    const result = [];
    for(let i =0; i< data.length; i++) {
      const valuesList = Object.values(data[i])
      console.log(valuesList)
      for(let j=0; j<valuesList.length; j++) {
        if (((String(valuesList[j])).toLowerCase()).includes(searchKey)) {
          result.push(data[i])
          break;
        }
      }
    }
    res.status(200).send({value: result.slice(Number(skip), (Number(skip)+Number(count))), totalCount: result.length })
  } else if (sortingField) {
    console.log("sorting: " + sortingField + " " + sortingOrder)
    let sorted = [];
    if (sortingOrder === 'true') {
      sorted = data.sort((a,b) => (a[sortingField] > b[sortingField]) ? -1 : ((b[sortingField] > a[sortingField]) ? 1 : 0));
      console.log("sorting: " + sortingField + " " + sortingOrder + " true")
    } else {
      sorted = data.sort((a,b) => (a[sortingField] > b[sortingField]) ? 1 : ((b[sortingField] > a[sortingField]) ? -1 : 0));
      console.log("sorting: " + sortingField + " " + sortingOrder + " false")
    }
    res.status(200).send({value: sorted.slice(Number(skip), (Number(skip)+Number(count))), totalCount: sorted.length})
  } else if (count && skip) {
    res.status(200).send({value: data.slice(Number(skip), (Number(skip)+Number(count))), totalCount })
  } else  {
    res.status(200).send({value: data, totalCount})
  }
};

