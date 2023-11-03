import { app } from ".";

app.listen(3333, () => {
  console.log(`
      App is running at port 3333
      API documentation: http://localhost:3333/api-documentation
  `)
})