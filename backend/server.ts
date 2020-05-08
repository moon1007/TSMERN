import app from "./app";

const PORT = 5000; // typical host port number, can change

app.listen(PORT, () => {
  console.log("Express server is listening on port " + PORT);
});
