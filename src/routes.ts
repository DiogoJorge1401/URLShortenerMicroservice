import { Router } from "express";

const routes = Router();

routes.get("/whoami", (req, res) => {

  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']

  res.json({ ipaddress, language, software })
});

export { routes };
