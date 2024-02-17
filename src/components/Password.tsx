// パスワード変更
const Password = () => {
  return (
    <div>
      <div className="text-center font-bold text-xl mb-10">パスワード変更</div>

      <form className=" text-sm">
        {/* 新しいパスワード */}
        <div className="mb-5">
          <div className="text-sm mb-1 font-bold">新しいパスワード</div>
          <input
            type="password"
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-sky-500"
            placeholder="新しいパスワード"
            id="password"
          />
          <div className="my-3 text-center text-sm text-red-500"></div>
        </div>

        {/* 確認用パスワード */}
        <div className="mb-5">
          <div className="text-sm mb-1 font-bold">確認用パスワード</div>
          <input
            type="password"
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-sky-500"
            placeholder="確認用パスワード"
            id="confirmation"
          />
          <div className="my-3 text-center text-sm text-red-500"></div>
        </div>

        {/* 変更ボタン */}
        <div className="mb-5">
          <button
            type="submit"
            className="font-bold bg-sky-500 hover:brightness-95 w-full rounded-full p-2 text-white text-sm"
          >
            変更
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
