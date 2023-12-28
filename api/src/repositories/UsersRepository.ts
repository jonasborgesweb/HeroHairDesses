import { prisma } from "../database/prisma"
import { ICreateUsers } from "../Interface/UsersInterface"

class UsersRepository {
  async create({ name, email, password }: ICreateUsers) {
    const result = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    })
    return result
  }

  async findUserByEmail(email: string) {
    const result = await prisma.users.findUnique({
      where: {
        email,
      },
    })
    return result
  }
}

export { UsersRepository }
