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

const getSavedImgById = async (req, res) => {
  try {
    let { nguoi_dung_id } = req.params;
    let nguoi_dung_id2 = Number(nguoi_dung_id);
    let data = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: nguoi_dung_id2,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`getSavedImg error ${e}`);
  }
};

const getCreatedImgById = async (req, res) => {
  try {
    let { nguoi_dung_id } = req.params;
    let nguoi_dung_id2 = Number(nguoi_dung_id);
    let data = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: nguoi_dung_id2,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`getCreatedImgById error ${e}`);
  }
};

const deleteImgById = async (req, res) => {
  try {
    let { imgId } = req.params;
    let imgId2 = Number(imgId);
    await prisma.hinh_anh.delete({
      where: {
        hinh_id: imgId2,
      },
    });
    res.send("Delete img successful!");
  } catch (e) {
    res.send(`deleteImgById error ${e}`);
  }
};

export { getInfoUser, getSavedImgById, getCreatedImgById, deleteImgById };
