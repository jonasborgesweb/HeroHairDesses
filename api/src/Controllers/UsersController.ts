import { NextFunction, Request, Response } from "express"
import { UsersServices } from "../services/UsersServices"

class UsersController {
  private usersServices: UsersServices
  constructor() {
    this.usersServices = new UsersServices()
  }
  //TODO: BUSCAR TODOS (INDEX)
  index() {}
  //TODO: BUSCAR SOMENTE UM (SHOW)
  show() {}

  //TODO: CRIAR (STORE)
  async store(request: Request, response: Response, next: NextFunction) {
    const { name, email, password } = request.body

    try {
      const result = await this.usersServices.create({ name, email, password })
      return response.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }
  //TODO: AUTENTICAÇÃO (AUTH)
  auth() {}
}

export { UsersController }
