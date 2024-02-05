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

const getInfoComment = async (req, res) => {
  try {
    let { imgId } = req.params;
    let imgId2 = Number(imgId);
    let data = await prisma.binh_luan.findMany({
      where: {
        hinh_id: imgId2,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`getInfoComment error ${e}`);
  }
};

const getImgIsSaved = async (req, res) => {
  try {
    let { imgId } = req.params;
    let imgId2 = Number(imgId);
    let data = await prisma.luu_anh.findMany({
      where: {
        hinh_id: imgId2,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`getImgIsSaved error ${e}`);
  }
};

const saveComment = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung } = req.body;
    let ngay_binh_luan2 = new Date(ngay_binh_luan).toISOString();
    let newComment = {
      nguoi_dung_id,
      hinh_id,
      ngay_binh_luan: ngay_binh_luan2,
      noi_dung,
    };
    await prisma.binh_luan.create({
      data: newComment,
    });
    res.send("Create Comment Successful");
  } catch (e) {
    res.send(`saveComment error ${e}`);
  }
};

export { getInfoImage, getInfoComment, getImgIsSaved, saveComment };
