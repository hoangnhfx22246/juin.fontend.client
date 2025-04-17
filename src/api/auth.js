import axiosPublic from "../util/axiosPublic";
import axiosPrivate from "../util/axiosPrivate";

// Đăng ký người dùng và tự động đăng nhập
export const registerUserAPI = async (formData) => {
  await getCsrfToken(); // Lấy token CSRF từ server khi Đăng ký người dùng

  const res = await axiosPublic.post("/api/auth/register", formData, {
    withCredentials: true, // cookie sẽ được gửi hoặc nhận về
  });
  return res.data; // trả về user + token
};

// Đăng nhập người dùng
export const loginUserAPI = async (formData) => {
  await getCsrfToken(); // Lấy token CSRF từ server khi đăng nhập

  const res = await axiosPublic.post("/api/auth/login", formData, {
    // Để cookie được gửi đi và nhận về từ server
    withCredentials: true, //cookie sẽ được gửi hoặc nhận về
  });
  return res.data; // trả về user + token
};

// Đăng xuất người dùng
export const logoutUserAPI = async () => {
  await getCsrfToken(); // Xác nhận có token CSRF trước khi gửi
  const res = await axiosPrivate.post("/api/auth/logout", null, {
    withCredentials: true,
  });
  localStorage.removeItem("csrfToken"); // Xoá token sau khi server xác nhận logout
  return res.data;
};

// Lấy token CSRF từ server để bảo vệ khỏi các cuộc tấn công CSRF
export const getCsrfToken = async () => {
  const savedToken = JSON.parse(localStorage.getItem("csrfToken"));
  if (savedToken) return savedToken; // nếu đã có thì không cần gọi server nữa

  const res = await axiosPublic.get("/api/auth/csrf-token", {
    withCredentials: true,
  });
  localStorage.setItem("csrfToken", JSON.stringify(res.data.csrfToken)); // lưu token vào localStorage
  return res.data.csrfToken;
};

// Quên mật khẩu
export const forgotPasswordAPI = async (email) => {
  await getCsrfToken(); // Lấy token CSRF từ server khi Đăng ký người dùng

  const res = await axiosPublic.post(
    "/api/auth/forgot-password",
    { email },
    {
      withCredentials: true, // cookie sẽ được gửi hoặc nhận về
    }
  );
  return res.data;
};

// Reset mật khẩu
export const resetPasswordAPI = async (formData) => {
  const token = await getCsrfToken(); // Lấy token CSRF từ server khi Đăng ký người dùng

  const res = await axiosPublic.post(`/api/auth/reset-password`, formData, {
    headers: {
      "X-CSRF-Token": token,
    },
    withCredentials: true, // cookie sẽ được gửi hoặc nhận về
  });
  return res.data;
};
