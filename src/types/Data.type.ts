interface Live {
  api: Api
  cv: Cv
}

interface Realtime {
  api: Api
  server: Server
}

interface Postgame {
  api: Api
  server: Server
}

interface Api {
  expectation: string
  fact: string
}

interface Cv {
  expectation: string
  fact: string
}

interface Server {
  expectation: string
  fact: string
}

export default interface Data {
  live: Live
  realtime: Realtime
  postgame: Postgame
}
