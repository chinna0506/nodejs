const express = require("express");
const router = express.Router();

const { 
    getTransaction,
    addTransaction,
    deleteTransaction,
    updateTransaction
 } = require("../controllers/transactions")

router
.route('/')
.get(getTransaction)
.post(addTransaction)

router
.route('/:id')
.delete(deleteTransaction)
.put(updateTransaction)

module.exports = router;