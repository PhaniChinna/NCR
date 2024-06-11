const express = require("express");
const router = express.Router();
const getFullBooks = require("../controller/control");

router.get("/books", getFullBooks.handleGetAllBooks);
router.get("/books/:bookId", getFullBooks.handleGetBookById);
router.post("/book", getFullBooks.handleCreateBook);
router.delete("/books/:bookId", getFullBooks.handleDeleteBookById);

module.exports = router;
