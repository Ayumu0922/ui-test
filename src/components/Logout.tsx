// ログアウト
const Logout = () => {
  return (
    <div>
      <div className="text-center mb-5 text-xl">ログアウトしますか？</div>
      {/* ログアウトボタン */}
      <form className=" text-sm">
        <div className="mb-5">
          <button
            type="submit"
            className="font-bold bg-red-500 hover:brightness-95 w-full rounded-full p-2 text-white text-sm"
          >
            ログアウト
          </button>
        </div>
      </form>
    </div>
  );
};

export default Logout;
