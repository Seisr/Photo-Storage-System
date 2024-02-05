import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getImage = async (req, res) => {
  let { page, size } = req.params;
  let { imageName } = req.query;
  let num_page = Number(page);
  let num_size = Number(size);
  let index = (num_page - 1) * num_size;
  try {
    if (!imageName) {
      imageName = "";
    }
    let data = await prisma.hinh_anh.findMany({
      skip: index,
      take: num_size,
      where: {
        ten_hinh: {
          contains: imageName,
        },
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`BE error: ${e}`);
  }
};

export { getImage };
