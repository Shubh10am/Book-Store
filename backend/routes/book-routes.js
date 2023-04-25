const express = require('express');

const router = express.Router();
const Book = require('../model/Book');
const booksController = require("../controllers/books-controller")
const product = require('../model/Book')
router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)
router.get("/:id", booksController.getById)
router.put("/:id", booksController.updateBook)
router.delete("/:id", booksController.deleteBook)

module.exports = router;