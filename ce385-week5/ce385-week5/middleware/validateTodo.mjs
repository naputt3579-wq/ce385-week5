export function validateTodo(req, res, next) {
  const { id, title, done, priority } = req.body;

  if (!id || !title || done === undefined || priority === undefined) {
    return res.status(400).json({
      message: "ข้อมูล Todo ไม่ครบ"
    });
  }

  next();
}