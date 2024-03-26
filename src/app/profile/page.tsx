import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Link from "next/link";
import DateReserve from "@/components/DateReserve";
import userLogOut from "@/libs/userLogout";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useState } from "react";
// import { useRouter } from "next/navigation";

export default async function Profile() {
  // const router = useRouter();

  // const [isEditing, setIsEditing] = useState(false);
  // const [name, setName] = useState(null);

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <div className="w-full h-[100vh] flex flex-row justtify-center items-center">
      <div className="w-[30%] h-full bg-slate-200 flex flex-col items-center py-10 space-y-5 relative">
        <div className="h-[30%] w-[60%] relative">
          <Image
            src={"/img/logo2.png"}
            alt="profile picture"
            objectFit="cover"
            width={300}
            height={300}
          />
        </div>
        <div className="h-[5%] w-[90%] relative">
          <div className="text-3xl text-center mt-12">{profile.data.name}</div>
        </div>
        <div className="h-[20%] w-[95%] space-y-2 flex-1 itemscenter relative">
          <div className="pb-2 pl-5 border-b border-black mt-24">Profile</div>
          <div className="pb-2 pl-5 border-b border-black mt-24">Booking</div>
        </div>
        <div className="h-[75%] w-[95%] flex items-end">
          <div className="w-[100%] pb-2 pl-5 border-b border-black bottom-4">
            <Link href="/api/auth/signout">Logout</Link>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-full text-left mx-20 mt-48">
        <div className="text-2xl ml-4 mb-12">Profile</div>
        <div className="flex flex-col space-y-8 m-4 mt-50">
          <div className="space-y-3">
            <div>Name</div>
            <TextField defaultValue={profile.data.name} size="small" />
          </div>
          <div className="space-y-3">
            <div>Email</div>
            <TextField defaultValue={profile.data.email} size="small" />
          </div>
          <div className="space-y-3">
            <div>Tel</div>
            <TextField defaultValue={profile.data.tel} size="small" />
          </div>
          <div>
            <button
              className="rounded-md bg-orange-600 hover:bg-orange-400 px-3 py-2
            shadow-sm text-white right-0 bottom-0 mt-8"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
    <div className="w-[100%] flex flex-col items-center space-y-4 min-h-[70vh] justify-center">
      <div className="border border-black p-10 rounded-xl">
        <div className="text-3xl font-medium"> Profile </div>
        <br />

        {
          <Link href={"/campground"}>
            <button
              className="block rounded-md bg-orange-600 hover:bg-orange-400 px-3 py-2
            shadow-sm text-white "
            >
              Book campground
            </button>
          </Link>
        }
        <div className="flex flex-col">
          <div className="w-200 h-20 border border-gray-500 p-5 m-5 flex items-center justify-center">
            {" "}
            Name : {profile.data.name} <br />
          </div>
          <div className="w-200 h-20 border border-gray-500 p-5 m-5 flex items-center justify-center">
            {" "}
            Email : {profile.data.email} <br />
          </div>
          <div className="w-200 h-20 border border-gray-500 p-5 m-5 flex items-center justify-center">
            {" "}
            Telephone : {profile.data.tel} <br />
          </div>
        </div>
        <div>
          <Link href="/api/auth/logout">
            <button
              className="rounded-md bg-orange-600 hover:bg-orange-400 px-3 py-2
            shadow-sm text-white right-0 bottom-0"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
*/
