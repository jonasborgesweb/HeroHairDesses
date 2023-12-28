import { hash } from "bcrypt"
import { ICreateUsers } from "../Interface/UsersInterface"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersServices {
  private usersRepository: UsersRepository
  constructor() {
    this.usersRepository = new UsersRepository()
  }
  async create({ name, email, password }: ICreateUsers) {
    const findUser = await this.usersRepository.findUserByEmail(email)

    if (findUser) {
      throw new Error("User Exists!")
    }

    const hashPassword = await hash(password, 10)

    const create = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    })

    return create
  }
}

export { UsersServices }
