import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-white text-center px-12 pt-6">
      <h1
        className="text-lg font-semibold mb-4 leading-relaxed"
        style={{ color: "#F06680" }}
      >
        하루 한 번, <br />
        어둠 뒤엔 해가 떠오르듯 감사의 순간을 떠올려보세요
      </h1>

      <img src="/MainLogo.svg" alt="Main Logo" className="w-60 h-60 mt-4" />

      <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-sm">
        <img
          src="/GoogleLoginBtn.svg"
          alt="Google Login"
          className="w-72 cursor-pointer"
        />
        <img
          src="/KakaoLoginBtn.svg"
          alt="Kakao Login"
          className="w-72 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LoginPage;
