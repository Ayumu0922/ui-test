import Image from "next/image";
import avatarUrl from "../../public/images/default.png";

const Profile = () => {
  return (
    <>
      <div className="text-center font-bold text-xl mb-10">プロフィール</div>
      <form className=" text-sm">
        {/* アバター画像 */}
        <div className="mb-5">
          <div className="flex flex-col text-sm items-center justify-center mb-5">
            <div className="relative w-24 h-24 mb-5">
              <Image
                src={avatarUrl}
                className="rounded-full object-cover"
                alt="avatar"
                fill
              />
            </div>
            <input type="file" id="avatar" />
          </div>
        </div>

        {/* 名前 */}
        <div className="mb-5 ">
          <div className="text-sm mb-1 font-bold">名前</div>
          <div>
            <input
              type="text"
              className=" border rounded-md  py-2 px-3 focus:outline-none focus:border-sky-500"
              placeholder="名前"
              id="name"
              required
            />
          </div>
        </div>

        {/* 自己紹介 */}
        <div className="mb-5">
          <div className="text-sm mb-1 font-bold">自己紹介</div>
          <textarea
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-sky-500"
            placeholder="自己紹介"
            id="introduce"
            rows={5}
          />
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
    </>
  );
};

export default Profile;
