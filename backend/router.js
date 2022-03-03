const Task = require("./controllers/TaskController");

module.exports = (app) => {
  app.get("/task", async (req, res) => {
    try {
      let result = await Task.read();
      res.send(result);
    } catch (error) {
      res.send({ code: 400, message: error.message || error });
    }
  });

  app.post("/task", async (req, res) => {
    try {
      let result = await Task.create(req.body);
      res.send(result);
    } catch (error) {
      res.send({ code: 400, message: error.message || error });
    }
  });

  app.delete("/task/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let result = await Task.delete(id);
      res.send(result);
    } catch (error) {
      res.send({ code: 400, message: error.message || error });
    }
  });

  app.put("/task/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let result = await Task.update(id, req.body);
      res.send(result);
    } catch (error) {
      res.send({ code: 400, message: error.message || error });
    }
  });
};
