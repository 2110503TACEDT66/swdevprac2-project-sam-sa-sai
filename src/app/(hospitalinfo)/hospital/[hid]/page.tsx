import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospital = getHospital(params.hid);

  const hospitalReady = await hospital;

  if (!hospitalReady) return <p>Hospital Loading ...</p>;
  return (
    <main className="block w-full items-center">
      <div className="my-10">
        {/* <div className="text-2xl font-semibold text-center">
          Hospital
          {mockHospital.get(params.hid).name}
        </div> */}
        <div className="text-2xl font-semibold text-center">
          {hospitalReady.data.name}
        </div>
      </div>
      <div className="flex flex-row my-5 justify-center my-5 items-center">
        <Image
          src={hospitalReady.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        ></Image>
        <div className="p-5 items-center w-[30%] top-0 space-y-2">
          <div className="text-left text-lg text-wrap">
            Address: {hospitalReady.data.address} <br />
            District: {hospitalReady.data.district} <br />
            Province: {hospitalReady.data.province} <br />
            Postalcode: {hospitalReady.data.postalcode} <br />
            Tel: {hospitalReady.data.tel}
          </div>
        </div>
      </div>
      <div className="w-[100%] p-4 flex justify-center items-center">
        <button
          className="block rounded-lg bg-cyan-700 hover:bg-cyan-600 hover:ring-cyan-600 
                  px-3 py-2 text-white shadow-sm w-[60%] h-[80%] text-lg "
        >
          Back
        </button>
      </div>
    </main>
  );
}

// import Image from "next/image";
// import getHospital from "@/libs/getHospital";

// export default function HospitalDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const hospitalDetail = getHospital(params.id);
//   const mockHospital = new Map();

//   // mockHospital.set("001", {
//   //   name: "Chulalongkorn Hospital",
//   //   rating: 5,
//   //   img: "/img/chula.jpg",
//   // });
//   // mockHospital.set("002", {
//   //   name: "Rajavithi Hospital",
//   //   rating: 5,
//   //   img: "/img/rajavithi.jpg",
//   // });
//   // mockHospital.set("003", {
//   //   name: "Thammasat University Hospital",
//   //   rating: 5,
//   //   img: "/img/thammasat.jpg",
//   // });

//   return (
//     <main className="block w-full items-center">
//       <div className="my-10">
//         {/* <div className="text-2xl font-semibold text-center">
//           Hospital
//           {mockHospital.get(params.hid).name}
//         </div> */}
//         <div className="text-2xl font-semibold text-center">
//           {hospitalDetail.name}
//         </div>
//       </div>
//       <div className="flex flex-row my-5 justify-center my-5 items-center">
//         <Image
//           src={hospitalDetail.picture}
//           alt="Hospital Image"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="rounded-lg w-[30%]"
//         ></Image>
//         <div className="p-5 items-center w-[30%] top-0 space-y-2">
//           <div className="text-center text-lg underline text-wrap">
//             {hospitalDetail.name}
//           </div>
//           <div className="text-left text-medium text-wrap">
//             Address: {hospitalDetail.address}
//           </div>
//           <div className="text-left text-medium text-wrap">
//             Tel: {hospitalDetail.tel}
//           </div>
//         </div>
//       </div>
//       <div className="w-[100%] p-4 flex justify-center items-center">
//         <button
//           className="block rounded-lg bg-cyan-700 hover:bg-cyan-600 hover:ring-cyan-600
//                   px-3 py-2 text-white shadow-sm w-[60%] h-[80%] text-lg "
//         >
//           Back
//         </button>
//       </div>
//     </main>
//   );
// }
