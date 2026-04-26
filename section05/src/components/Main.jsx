import "./Main.css";

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };
  return (
    <main>
      <h1>main</h1>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </main>
  );
};

export default Main;
