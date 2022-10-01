const Transaction = require('../models/transaction')

const getTransaction = async(req, res, next) =>{
    try {
        const transaction = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

const addTransaction = async(req, res, next) =>{
    try {
        const { text, amount } = req.body

        const transaction = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: message
            });
        }else{
            return res.status(500).json({
                success: false,
                error: "Server Error"
            });
        }
    }
}

const deleteTransaction = async(req, res, next) =>{
    try {
        const transaction = Transaction.findById(req.params.id)
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: "No Transaction Found"
            });
        }
        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })    
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

const updateTransaction = async(req, res, next) =>{
    res.send("Transaction from  Controller file updated")
}

module.exports = {
    getTransaction,
    addTransaction,
    deleteTransaction, 
    updateTransaction
}