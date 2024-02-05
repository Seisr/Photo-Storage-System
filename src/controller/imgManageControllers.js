import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getInfoUser = async (req, res) => {
  try {
    let data = await prisma.nguoi_dung.findMany();
    res.send(data);
  } catch (e) {
    res.send(`getInfoUser error ${e}`);
  }
};

export { getInfoUser };
