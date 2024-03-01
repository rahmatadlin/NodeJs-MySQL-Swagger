# NodeJs-MySQL-Swagger

=== INSTALASI ===
npm init -y

npm i express pg ejs sequelize

npm i -D sequelize-cli nodemon

touch .gitignore

git init

npx sequelize-cli

npx sequelize-cli init

npx sequelize-cli

npx sequelize-cli db:create (jangan lupa ubah nama DB nya di config)

npx sequelize-cli model:create

npx sequelize-cli model:create --name Art --attributes name:string,artist:string,date,desctiption:text,photo:string

npx sequelize-cli db:migrate

npx sequelize-cli migration:create --name addColumnPlaceOfOriginToArts (jangan lupa otak atik di file add columnya)

npx sequelize-cli db:migrate

npx sequelize-cli seed:create --name seedArts (jangan lupa otak atik di seed nya kaka)

npx sequelize-cli db:seed:all


===> npx sequelize-cli db:migrate:undo:all

npm i bcryptjs axios cors dotenv jsonwebtoken validator



===============================

create app.js

const express = require("express");
const app = express();
const port = 3000;
// const { Art } = require('./models/index')
const Controller = require("./controllers/controller.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", Controller.readUser); // Menampilkan halaman Home dengan All User --DONE
app.get("/users/add", Controller.addUserForm); // Menampilkan form untuk menambah art baru --DONE
app.post("/users/add", Controller.addUser); // Menambahkan art baru ke database --DONE
app.get("/users/:id", Controller.readDetailUser); // Menampilkan detail art berdasarkan id --DONE
app.post("/users/:id/edit", Controller.editDetailUser); // Untuk memperbarui / mengupdate data di database berdasarkan id --DONE
app.get("/users/:id/delete", Controller.deleteUser); // Menampilkan halaman Home --DONE

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

