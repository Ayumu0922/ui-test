import Link from "next/link";

import { Database } from "../../lib/supabase";
type profileType = Database["public"]["Tables"]["profiles"]["Row"];

// ナビゲーション
const Navigation = () => {
  return (
    <header className="px-5 font-bold shadow-navbarShadow bg-bodyColor bg-opacity-80 backdrop-blur-lg w-screen">
      <div className="py-5 container max-w-screen-sm mx-auto flex  justify-between items-center ">
        <Link
          href="/"
          className="font-bold text-2xl cursor-pointer  text-textGreen"
        >
          Next Supabase Auth
        </Link>

        <div className="text-sm font-bold">
          <div className="flex items-center space-x-5">
            <Link href="/auth/login">
              <button
                type="submit"
                className=" font-bold w-full bg-green-500 p-4 rounded-md text-white hover:scale-95 hover:bg-green-400  transition-all"
              >
                ログイン
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
