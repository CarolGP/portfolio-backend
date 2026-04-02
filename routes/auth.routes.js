import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {

    return res.json({
      success: true
    });
  }

  res.status(401).json({
    success: false,
    message: "Credenciales incorrectas"
  });
});

export default router;