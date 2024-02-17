// メールアドレス変更
const Email = () => {
  return (
    <div>
      <div className="text-center font-bold text-xl mb-10">
        メールアドレス変更
      </div>
      <form className=" text-sm">
        {/* 現在のメールアドレス */}
        <div className="mb-5">
          <div className="text-sm mb-1 font-bold">現在のメールアドレス</div>
          <div>email</div>
        </div>

        {/* 新しいメールアドレス */}
        <div className="mb-5">
          <div className="text-sm mb-1 font-bold">新しいメールアドレス</div>
          <input
            type="email"
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-sky-500"
            placeholder="新しいメールアドレス"
            id="email"
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

export default Email;
