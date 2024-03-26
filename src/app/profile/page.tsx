import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Link from "next/link";
import DateReserve from "@/components/DateReserve";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium"> New Booking </div>

      <div className="w-fit space-y-2 text-black">
        <div className="text-md text-left text-grey-600"> Booking </div>
        {/* <DateReserve/> */}
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm"
      >
        {" "}
        Book Vaccine{" "}
      </button>

      <div className="table-auto border-seperate border-spacing-2">
        {" "}
        <tbody>
          <tr>
            <td>User</td>
            <td>{profile.data.user}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td>Tel.</td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td>{profile.data.createdAt}</td>
          </tr>
        </tbody>
      </div>
      <div>
        <Link href="/api/auth/logout">
          <button className="text-white bg-orange-600">Logout</button>
        </Link>
      </div>
    </main>
  );
}
