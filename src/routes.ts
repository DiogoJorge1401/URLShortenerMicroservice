import { Router } from "express";

const routes = Router();

const shortenedURLS = [
  'https://forum.freecodecamp.org/'
]

routes.post("/shorturl", (req, res) => {
  try {
    const parsedURL = new URL(req.body.url).toString()
    let short_url = shortenedURLS.findIndex(url => url === parsedURL)

    if (short_url === -1) {
      short_url = shortenedURLS.length
      shortenedURLS[short_url] = parsedURL
    }

    return res.json({
      original_url: parsedURL,
      short_url
    })

  } catch (error) {
    return res.json({ erros: "Invalid URL" })
  }
});

routes.get("/shorturl/:id", (req, res) => {
  const url = shortenedURLS[req.params.id]
  if (!url)
    return res.json({ error: "No short URL found for the given input" })
  return res.redirect(url)
});

export { routes };
