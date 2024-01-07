export function GET (req, res, url, payload) {
  try {
    const ip = req.socket.remoteAddress
    const port = req.socket.remotePort
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(
      JSON.stringify({
        name: `Path ${url.pathname}. Your IP address is ${ip} and your source port is ${port}.`
      })
    )
  } catch (error) {
    res.statusCode = 500
    res.end('Internal Server Error')
    console.error(error)
  }
}

export function OPTIONS (req, res, url, payload) {
  try {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: 'root handlerOptions' }))
  } catch (error) {
    res.statusCode = 500
    res.end('Internal Server Error')
    console.error(error)
  }
}

export function POST (req, res, url, payload) {
  try {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(payload))
  } catch (error) {
    res.statusCode = 500
    res.end('Internal Server Error')
    console.error(error)
  }
}
