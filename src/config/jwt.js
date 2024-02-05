import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const createToken = (data) => {
  return jwt.sign(data, "KHA38", { expiresIn: "1y" });
};

const checkToken = (token) => {
  return jwt.verify(token, "KHA38", (e, decoded) => {
    if (e) {
      return {
        statusCode: 401,
        message: "Invalid toekn",
      };
    }
    return {
      statusCode: 200,
      data: decoded,
    };
  });
};

const lockApi = async (req, res, next) => {
  let { token } = req.headers;
  if (token) {
    let verifyToken = checkToken(token);
    if (verifyToken.statusCode == 401) {
      res.statusCode(401).send("Invalid token");
      return;
    }
    let { email } = verifyToken.data;
    let checkEmail = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });
    if (!checkEmail) {
      res.status(401).send("Ko tìm thấy email");
      return;
    }
    next();
  } else {
    res.status(401).send("Unauthorized");
    return;
  }
};

export { createToken, checkToken, lockApi };
