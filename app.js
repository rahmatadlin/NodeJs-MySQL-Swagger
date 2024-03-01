const express = require("express");
const app = express();
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const Controller = require("./controllers/controller.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", Controller.readUser); // Menampilkan halaman Home dengan All User --DONE
app.get("/users/add", Controller.addUserForm); // Menampilkan form untuk menambah user baru --DONE
app.post("/users/add", Controller.addUser); // Menambahkan user baru ke database --DONE
app.get("/users/:id", Controller.readDetailUser); // Menampilkan detail user berdasarkan id --DONE
app.post("/users/:id/edit", Controller.editDetailUser); // Untuk memperbarui / mengupdate data di database berdasarkan id --DONE
app.get("/users/:id/delete", Controller.deleteUser); // Menampilkan halaman Home --DONE

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
