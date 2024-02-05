import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const editUser = (req, res) => {
  try {
  } catch (e) {
    res.send(`editUser error ${e}`);
  }
};

export { editUser };
