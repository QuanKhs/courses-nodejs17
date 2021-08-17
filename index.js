const express = require("express");
const app = express();

app.use(express.json());
/**
 *
 *
 */
app.get("/hello", (req, res, next) => {
  res.send("Hello world");
});
// fakeData
const userList = [
  {
    id: 1,
    name: "Nguyen quang nam",
    email: "quangnam@gmail.com",
  },
  {
    id: 2,
    name: "user2",
    email: "user2@gmail.com",
  },
];


app.get("/api/users", (req, res, next) => {
  res.send(userList);
});


app.get("/api/user/:id", (req, res, next) => {
  const { id } = req.params;
  const detailUser = userList.find((user) => user.id === Number(id));

  if (detailUser) {
    return res.status(200).send(detailUser);
  }
  return res.status(400).send("Not Found");
});


app.post("/api/user", (req, res, next) => {
  const { name, email } = req.body;
  const newUser = {
    id: Math.random(),
    name,
    email,
  };
  userList.push(newUser);
  res.status(201).send(newUser);
});

app.patch("/api/user/:id", (req, res, next) => {
  
  const { id } = req.params;
  
  const { email, name } = req.body;
  
  const index = userList.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    return res.status(400).send("Not found");
  }
  // nếu có thì update
  const newUser = { id: +id, email, name };
  userList[index] = newUser;
  return res.status(200).send(newUser);
});

app.delete("/api/user/:id", (req, res, next) => {
  const { id } = req.params;

  const index = userList.findIndex((user) => user.id === Number(id));

  if (index === -1) return res.status(400).send("Not Found");

  userList.splice(index, 1);

  return res.status(200).send(`Deleted ${id}`);
});

app.listen(3000, () => {
  console.log("this app listening on port 3000");
});
