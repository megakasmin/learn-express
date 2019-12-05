const { get } = require("../../config");

const signup = async ({ email, password, firstName, lastName }) => {
  console.log("masuk");
  try {
    const result = {};
    const data = await get()
      .collection("users")
      .findOne({ email: email });

    if (!email) {
      result.email = "Wajib di isi !";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      result.email = "Format email salah";
    } else if (email) {
      if (data) {
        result.email = "Email sudah terdaftar";
      }
    }

    if (!password) {
      result.password = "'Wajib di isi";
    } else if (password.length < 8) {
      result.password = "Password minimal 8 karakter";
    }

    if (!firstName) {
      result.firstName = "Wajib di isi!";
    }

    if (!lastName) {
      result.lastName = "Wajib di isi";
    }

    return result;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
