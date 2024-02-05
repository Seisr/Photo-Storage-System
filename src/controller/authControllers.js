import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { createToken } from "../config/jwt.js";

const prisma = new PrismaClient();

const login = async (req, res) => {
  // login
  try {
    let { email, pass } = req.body;
    let data = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });
    if (data) {
      let checkPass = bcrypt.compareSync(pass, data.mat_khau);
      if (checkPass) {
        let payload = {
          email: data.email,
        };
        let token = createToken(payload);
        res.status(200).send(token);
      } else {
        res.status(400).send("Sai mật khẩu");
      }
    } else {
      res.status(404).send("Ko tìm thấy email");
    }
  } catch (e) {
    res.send(`login error ${e}`);
  }
};

const signUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi } = req.body;
    let data = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });
    if (data) {
      res.status(400).send("Email đã được sử dụng");
    } else {
      let encodedPass = bcrypt.hashSync(mat_khau, 10);
      let newUser = {
        email: email,
        mat_khau: encodedPass,
        ho_ten: ho_ten,
        tuoi: tuoi,
      };
      await prisma.nguoi_dung.create({
        data: newUser,
      });
      res.status(201).send("Người dùng khởi tạo thành công");
    }
  } catch (e) {
    res.status(500).send(`signUp error ${e}`);
  }
};

export { login, signUp };
