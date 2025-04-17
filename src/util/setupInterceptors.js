let storeInstance = null;
// Biến này sẽ chứa Redux store, ban đầu là null — sẽ gán khi injectStore được gọi.

let isRefreshing = false;
// Cờ kiểm tra có đang thực hiện refresh token không (để tránh gọi API refresh nhiều lần).

let refreshSubscribers = [];
// Mảng chứa danh sách callback sẽ chạy khi có token mới (các request bị lỗi 401 sẽ đợi ở đây).

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};
// Hàm này thêm callback vào mảng, dùng khi request gặp lỗi 401 sẽ đợi token mới rồi chạy lại.

const onRefreshed = (newAccessToken) => {
  refreshSubscribers.forEach((cb) => cb(newAccessToken));
  // Khi token mới có, gọi tất cả callback đang đợi với token mới.
  refreshSubscribers = [];
  // Xóa danh sách chờ sau khi đã xử lý xong.
};

const injectStore = (_store) => {
  storeInstance = _store;
};
// Hàm này dùng để truyền Redux store từ ngoài vào, tránh import trực tiếp để phá vòng lặp import.

const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    // Nếu request thành công thì trả response như bình thường.

    async (error) => {
      const originalRequest = error.config;
      // Lưu lại request gốc bị lỗi (để có thể gửi lại nếu token mới được refresh).

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // Nếu lỗi là 401 và request chưa retry lần nào -> đánh dấu sẽ retry 1 lần.

        try {
          if (!isRefreshing) {
            isRefreshing = true;
            // Nếu chưa có ai đang refresh token thì bắt đầu refresh.

            const res = await axiosInstance.post("/api/auth/refresh-token");
            const newAccessToken = res.data.accessToken;
            // Gọi API refresh-token và lấy accessToken mới.

            storeInstance.dispatch({
              type: "auth/loginUser/fulfilled",
              payload: {
                user: storeInstance.getState().auth.currentUser,
                accessToken: newAccessToken,
              },
            });
            // Dispatch action vào Redux để cập nhật accessToken mới.

            onRefreshed(newAccessToken);
            // Gọi lại tất cả các request cũ đang đợi token mới.

            isRefreshing = false;
            // Reset lại trạng thái, cho phép lần sau có thể refresh tiếp.
          }

          return new Promise((resolve) => {
            subscribeTokenRefresh((token) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              // Khi có token mới, gắn vào header Authorization.
              resolve(axiosInstance(originalRequest));
              // Gửi lại request cũ với token mới.
            });
          });
        } catch (err) {
          isRefreshing = false;
          // Nếu refresh token thất bại, reset cờ isRefreshing.

          storeInstance.dispatch({ type: "auth/logoutUser/fulfilled" });
          // Dispatch logoutUser để xóa dữ liệu user trên Redux.

          return Promise.reject(err);
          // Trả lỗi ra ngoài cho chỗ gọi Axios biết.
        }
      }

      return Promise.reject(error);
      // Nếu lỗi không phải 401 hoặc retry rồi mà vẫn lỗi thì trả luôn lỗi.
    }
  );
};

export { setupInterceptors, injectStore };
// Xuất hàm setupInterceptors để cài đặt vào Axios, injectStore để truyền store vào.
