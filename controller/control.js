const books = [
  {
    id: 1,
    isbn: 100,
    authorName: "Sam",
    bookName: "JS Question",
    pages: 100,
    price: 200,
  },
  {
    id: 2,
    isbn: 200,
    authorName: "arm",
    bookName: "LO Question",
    pages: 300,
    price: 300,
  },
  {
    id: 3,
    isbn: 300,
    authorName: "Pha",
    bookName: "HTML Question",
    pages: 500,
    price: 500,
  },
  {
    id: 4,
    isbn: 400,
    authorName: "Tom",
    bookName: "MySQL Question",
    pages: 800,
    price: 800,
  },
  {
    id: 5,
    isbn: 500,
    authorName: "Ram",
    bookName: "SQL Question",
    pages: 900,
    price: 900,
  },
];

function handleGetAllBooks(request, response) {
  response.json({ books });
}

function handleGetBookById(request, response) {
  const id = request.params.bookId;
  const getData = books.find((ele) => ele.id === Number(id));
  response.json({ getData });
}

function handleCreateBook(request, response) {
  const CreateBook = request.body;
  const getFinalResult = books.push(CreateBook);
  response.json({ status: " Success" });
}

function handleDeleteBookById(request, response) {
  const deleteId = request.params.bookId;
  const getDeleted = books.filter((ele) => ele.deleteId !== Number(deleteId));
  response.json({
    status: "Data is Deleted",
  });
}

module.exports = {
  handleGetAllBooks,
  handleGetBookById,
  handleCreateBook,
  handleDeleteBookById,
};
