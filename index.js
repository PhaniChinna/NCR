const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const BodyRoute = require("./routes/route");

app.use(bodyParser.json());

//Books Data
// const books = [
//   {
//     id: 1,
//     isbn: 100,
//     authorName: "Sam",
//     bookName: "JS Question",
//     pages: 100,
//     price: 200,
//   },
//   {
//     id: 2,
//     isbn: 200,
//     authorName: "arm",
//     bookName: "LO Question",
//     pages: 300,
//     price: 300,
//   },
//   {
//     id: 3,
//     isbn: 300,
//     authorName: "Pha",
//     bookName: "HTML Question",
//     pages: 500,
//     price: 500,
//   },
//   {
//     id: 4,
//     isbn: 400,
//     authorName: "Tom",
//     bookName: "MySQL Question",
//     pages: 800,
//     price: 800,
//   },
//   {
//     id: 5,
//     isbn: 500,
//     authorName: "Ram",
//     bookName: "SQL Question",
//     pages: 900,
//     price: 900,
//   },
// ];

//GetBooks
// app.get("/books", function (request, response) {
//   response.json({ books });
// });

// app.get("/books/:bookId", function (request, response) {
//   const id = request.params.bookId;
//   const getData = books.find((ele) => ele.id === Number(id));
//   response.json({ getData });
// });

// app.post("/book", function (request, response) {
//   const CreateBook = request.body;
//   const getFinalResult = books.push(CreateBook);
//   response.json({ status: " Success" });
// });

// app.delete("/books/:bookId", function (request, response) {
//   const deleteId = request.params.bookId;
//   const getDeleted = books.filter((ele) => ele.deleteId !== Number(deleteId));
//   response.json({
//     status: "Data is Deleted",
//   });
// });

app.use("/", BodyRoute);

app.listen(8000, () => {
  console.log(`Server Running at http://localhost:8000`);
});
