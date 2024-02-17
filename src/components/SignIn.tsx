import { AuthSwitchProps } from "../../types/types";

export default function SignIn({ className, setSwitchAuth }: AuthSwitchProps) {
  return (
    <div className={className}>
      <div className=" grid grid-cols-3 gap-2 items-center  mb-12 ">
        <div className=" w-full h-1 bg-gray-300"></div>
        <p className=" text-center text-lg font-bold md:hidden ">ログイン</p>
        <p className=" text-center text-base font-bold hidden md:block">
          メールアドレスでログイン
        </p>
        <span className=" w-full h-1 bg-gray-300"></span>
      </div>
      <form action="" className=" font-semibold flex flex-col gap-5 mb-9">
        {/* メールアドレス */}
        <label>メールアドレス</label>
        <input
          type="email"
          placeholder="メールアドレス"
          className="  py-3 px-2  border-b   bg-transparent  outline-none focus:outline-none"
          id="signin-email"
        />

        {/* パスワード */}
        <label className=" font-bold">パスワード</label>
        <input
          type="password"
          placeholder="パスワード"
          className=" py-3 px-2   bg-transparent  focus:outline-none border-b"
          id="signin-password"
        />

        {/* ログインボタン */}

        <button
          type="submit"
          className="font-bold w-full bg-green-500 py-5 rounded-md text-white mb-8 hover:scale-95 hover:bg-green-400  transition-all"
        >
          ログイン
        </button>
      </form>

      {/* パスワード忘れた */}

      {/* 新規作成誘導 */}
      <p className=" gap-2 text-center mb-10  font-semibold  text-base md:text-xl items-center justify-center flex flex-col md:flex-none">
        アカウントの作成はこちら
        <button
          className=" font-semibold  text-textGreen cursor-pointer ml-3 text-underline"
          onClick={() => {
            console.log("新規登録ボタンがクリックされました");
            setSwitchAuth((value) => !value);
          }}
        >
          新規登録
        </button>
      </p>
    </div>
  );
}
