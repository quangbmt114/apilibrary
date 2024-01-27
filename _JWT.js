const jwt = require("jsonwebtoken");
const dataJWT = require("./dataJWT");
// tạo mã token
const loginUser = async (userLogin) => {
  const { email, password } = userLogin;
  try {
    if (!email) {
      return {
        status: "ERR",
        message: "email không được bỏ trống!",
      };
    }
    if (!password) {
      return {
        status: "ERR",
        message: "Mật khẩu không được bỏ trống!",
      };
    }

    if (!user) {
      return {
        status: "ERR",
        message: "Tài khoản này không tồn tại!",
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        status: "ERR",
        message: "Tên tài khoản hoặc mật khẩu không đúng!",
      };
    }

    if (user.Status !== 1) {
      return {
        status: "ERR",
        message: "account is unauthorized",
      };
    }

    const access_token = await generalAccessToken({
      Fullname: user.Fullname,
      userId: user.UserID,
      Username: user.Username,
      userStatus: user.Status,
      role: user.Role,
    });

    const refresh_token = await generalRefreshToken({
      Fullname: user.Fullname,
      userId: user.UserID,
      Username: user.Username,
      userStatus: user.Status,
      role: user.Role,
    });

    return {
      status: "OK",
      message: "SUCCESS",
      access_token,
      user: {
        Fullname: user.Fullname,
        userId: user.UserID,
        photo: user.photo
          ? user.photo
          : "https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg",
        Username: user.Username,
      },
      role: user.Role,
      refresh_token,
    };
  } catch (e) {
    throw e;
  }
};
module.exports = {
  loginUser,
};
