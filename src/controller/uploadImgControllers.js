import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createImg = async (req, res) => {
  try {
    let { ten_hinh, duong_dan, mo_ta, nguoi_dung_id } = req.body;
    let newImg = {
      ten_hinh,
      duong_dan,
      mo_ta,
      nguoi_dung_id,
    };
    await prisma.hinh_anh.create({
      data: newImg,
    });
    res.send("Create Img successfully!");
  } catch (e) {
    res.send(`uploadImg error ${e}`);
  }
};

export { createImg };
