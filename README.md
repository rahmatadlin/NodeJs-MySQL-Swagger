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

