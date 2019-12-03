# Full Stack Engineer Challenge

## Prerequisite
  * [docker](https://www.docker.com)

## Installation
  * `git clone git@github.com:wonderer007/GuardRails.git`
  * `cd GuardRails && docker-compose up --build`
  * Frontend is running at `http://localhost:3000` while api server is running at `http://localhost:5000/`
  * Go to browser now ;)
  ___

## Note
  If you get following error while running `docker-compose up --build`

  ```
  Unhandled rejection SequelizeHostNotFoundError: getaddrinfo ENOTFOUND postgres postgres:5432
  ```

  go to `.env` file and change `DATABASE_HOST` to `host.docker.internal` see [connect to docker container](https://stackoverflow.com/questions/24319662/from-inside-of-a-docker-container-how-do-i-connect-to-the-localhost-of-the-mach)
