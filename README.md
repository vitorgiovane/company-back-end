<p align="center">
  <br>
  <img height="70" alt="Company logo" src="https://res.cloudinary.com/vitorgiovane/image/upload/v1592808191/company/logo-dark_wkt9dz.png" />
  </p>
  <br>
<h2 align="center">
  Back-end of Company application
    <br>
</h2>
<h4 align="center">REST API developed with TypeScript and Node.js</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vitorgiovane/company-back-end?color=%2304D361">
  <img alt="GitHub tp language" src="https://img.shields.io/github/languages/top/vitorgiovane/company-back-end">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/vitorgiovane/company-back-end">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vitorgiovane/company-back-end">
</p>

<br>

## :gem: &nbsp; Features
- Creation of users
- Creation of sessions

<br>

## :notebook_with_decorative_cover: &nbsp; Documentation
https://documenter.getpostman.com/view/3822165/SzzoZvGR?version=latest

<br>

## :arrow_forward: &nbsp; Creating a user
<img alt="Company" src="https://res.cloudinary.com/vitorgiovane/image/upload/v1592809019/company/2020-06-22_03-52_k1dhqe.png" />

<br>

## :arrow_forward: &nbsp; Creating a session
<img alt="Company" src="https://res.cloudinary.com/vitorgiovane/image/upload/v1592809026/company/2020-06-22_03-56_n0l02y.png" />

<br>

## :video_game: &nbsp; How to run this project
1. Clone this repository on your machine.
2. Make sure you have Node.js (12 or higher), Docker and Docker Compose installed on your machine.
3. At the root of the project, create an **.env** file and fill it in according to the **.env.example** file. Filling example:
```yml
PROJECT_PREFIX=company-back-end
DB_EXTERNAL_PORT=4020
DB_NAME=company
DB_USER=company
DB_PASSWORD=company
```
4. Open the **ormconfig.json** file, located at the root of the project, and adjust the database connection data according to the **.env** file created in step 3.
5. In a terminal at the root of the project run **`docker-compose up -d --build`** to start the Postgres database.
6. In a terminal at the root of the project run **`yarn`** or **`npm install`** to install the dependencies.
7. At a terminal at the root of the project run **`yarn typeorm migration:run`** or **`npm run typeorm migration:run`** to perform the migrations.
8. At a terminal at the root of the project run **`yarn dev:server`** or **`npm run dev:server`** to run the project. Then, the API can be consumed by the base URL **http://localhost:3333**.

<br>

## :rocket: &nbsp; Technologies
This project was developed with the following technologies:

- TypeScript
- Node.js
- Express.js
- TypeORM
- Docker
- Docker Compose
- Postman
- VS Code

<br>

## :page_with_curl: &nbsp; License
This project is under the MIT license. See the [LICENSE](https://github.com/vitorgiovane/company-back-end/blob/master/LICENSE) for more information.

<br>

---
Developed by **Vitor Giovane** <span>&#x1f1e7;&#x1f1f7;</span>

**[Talk to me :smile:&nbsp;:thumbsup:](https://www.linkedin.com/in/vitorgiovane)** 
