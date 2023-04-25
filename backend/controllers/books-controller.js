const Book = require("../model/Book")

const getAllBooks = async(req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "No Products Found" })
    }
    return res.status(200).json({ books })
}

const getById = async(req, res, next) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findById(id)
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({ message: "No Book Found" })
    }

    res.status(200).json({ book })
}

const addBook = async(req, res, next) => {
    const { name, author, description, price, avilable, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            avilable,
            image
        })
        await book.save();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({ message: "Unable To Add" })
    }

    res.status(201).json({ book })
}

const updateBook = async(req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, avilable, image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            avilable,
            image
        })
        book = await book.save();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Unable To Update By This Id" })
    }

    res.status(200).json({ book })
}

const deleteBook = async(req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, avilable } = req.body;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
        book = await book.save();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Unable To Delete By This Id" })
    }

    res.status(200).json({ message: "Product Successful Deleted" })
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;