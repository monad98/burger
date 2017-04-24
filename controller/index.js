const burger = require('../model/burger');

module.exports.index = async(req, res, next) => {
  const burgers = await burger.selectAll();
  const toEat = burgers.filter(b => !b.devoured);
  const eaten = burgers.filter(b => b.devoured);
  res.render('index', {toEat, eaten})
}

module.exports.insert = async(req, res, next) => {
  const data = req.body;
  await burger.insertOne(data);
  res.redirect("/");
}

module.exports.update = async(req, res, next) => {
  await burger.updateOne(req.body,{ id: parseInt(req.params.id) });
  res.redirect("/");  
}