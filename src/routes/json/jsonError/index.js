export const GET = (req, res) => {
  throw 'unhandled error'
  res.json({ name: 'test handlerGet' })
}

export const PURGE = (req, res) => {
  res.json({ name: 'test handlerOptions' })
}
