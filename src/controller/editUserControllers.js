import { PrismaClient } from "@prisma/client";
import { checkToken } from "../config/jwt.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const editUser = async (req, res) => {
  try {
    let { token } = req.headers;
    let verifyToken = checkToken(token);
    let { nguoi_dung_id } = verifyToken.data;
    let { email_change, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
    let encodedPass = bcrypt.hashSync(mat_khau, 10);
    let updateData = {
      email: email_change,
      mat_khau: encodedPass,
      ho_ten,
      tuoi,
      anh_dai_dien,
    };
    await prisma.nguoi_dung.update({
      where: {
        nguoi_dung_id: nguoi_dung_id,
      },
      data: updateData,
    });
    res.send(`Update người dùng thành công`);
  } catch (e) {
    res.send(`editUser error ${e}`);
  }
};

export { editUser };
