const express = require("express");
const router = express.Router();

const { operations: ctrl } = require("../../controllers");

// Добавление расхода
// 1. для добавления расхода должна происходить проверка, аутентифицирован и авторизирован ли пользователь
// - если нет, перекидываем его на страничку автор
// - да, тогда делаем добавление строки в базе
//
// 1. добавление данных в коллекцию
// - тип действия - post
// - данные запроса: дата, описание расхода, категория расхода, сумма расхода
//
// - нужен доступ к модели
// -
//
//
//
//

router.post("/addexpance", ctrl.addExpance);

router.post("/addincome", ctrl.addIncome);

router.delete("/:transactionId", ctrl.removeTransaction);

module.exports = router;
