import { AuthSwitchProps } from "../../types/types";

export default function SignUp({ className, setSwitchAuth }: AuthSwitchProps) {
  return (
    <div className={className}>
      <div className=" grid grid-cols-3 gap-2 items-center  mb-12">
        <div className=" w-full h-1 bg-gray-300"></div>
        <p className=" text-center text-lg font-bold md:hidden ">新規登録</p>
        <p className=" text-center text-base font-bold hidden md:block">
          新規会員登録はこちらから
        </p>
        <span className=" w-full h-1 bg-gray-300"></span>
      </div>
      <form action="" className="flex flex-col gap-5 mb-2 font-semibold">
        {/* 名前 */}
        <label>名前</label>
        <input
          type="text"
          placeholder="ユーザ名"
          className="py-3 px-2  border-b   bg-transparent  outline-none focus:outline-none"
          id="name"
        />

        {/* メールアドレス */}
        <label>メールアドレス</label>
        <input
          type="email"
          placeholder="メールアドレス"
          className="  py-3 px-2  border-b   bg-transparent  outline-none focus:outline-none"
          id="signup-email"
        />

        {/* パスワード */}
        <label>パスワード</label>
        <input
          type="password"
          placeholder="パスワード"
          className="  py-3 px-2  border-b   bg-transparent  outline-none focus:outline-none"
          id="signup-password"
        />

        <button
          className=" font-bold w-full bg-green-500 py-5 rounded-md text-white hover:scale-95 hover:bg-green-400 transition-all"
          type="submit"
        >
          新規登録
        </button>
      </form>

      <p className=" gap-2  text-sm text-center mb-10 font-semibold  md:text-xl items-center justify-center flex flex-col md:flex-none">
        アカウントをお持ちの方はこちら
        <span
          className=" font-semibold  text-textGreen cursor-pointer ml-3 text-underline"
          onClick={() => setSwitchAuth((value) => !value)}
        >
          ログイン
        </span>
      </p>
    </div>
  );
}
