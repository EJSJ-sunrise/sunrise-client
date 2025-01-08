import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center max-w-xl mx-auto px-12 pt-2">
      {/* 텍스트 크기와 위치 조정 및 글씨 색상 변경 */}
      <h1
        className="text-lg font-semibold mb-4 leading-relaxed"
        style={{ color: "#F06680" }}
      >
        하루 한 번, <br />
        어둠 뒤엔 해가 떠오르듯 감사의 순간을 떠올려보세요
      </h1>

      {/* 메인 로고 */}
      <img src="/MainLogo.svg" alt="Main Logo" className="w-60 h-60 mt-4" />

      {/* 소셜 로그인 버튼 - 크기 조정 및 이미지로만 사용 */}
      <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-sm">
        {/* 구글 로그인 버튼 이미지 */}
        <img
          src="/GoogleLoginBtn.svg"
          alt="Google Login"
          className="w-72 cursor-pointer"
        />

        {/* 카카오 로그인 버튼 이미지 */}
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
