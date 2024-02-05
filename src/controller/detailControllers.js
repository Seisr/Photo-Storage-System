import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getInfoImage = async (req, res) => {
  try {
    let { imgId } = req.params;
    let imgId2 = Number(imgId);
    let data = await prisma.hinh_anh.findMany({
      where: {
        hinh_id: imgId2,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`getInfoImage error ${e}`);
  }
};

export { getInfoImage };
