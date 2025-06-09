const prisma = require('../prisma/client');

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany({ where: { userId: req.userId } });
    res.json(tasks);
  } catch (err) { next(err); }
};

exports.createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    const task = await prisma.task.create({
      data: {
        userId: req.userId,
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        priority,
        status
      }
    });
    res.status(201).json(task);
  } catch (err) { next(err); }
};