import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="reduce risk"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div
        className="w-full h-[30%] p-[10px] 
                  text-slate-100 font-sans font-normal text-xl text-center text-wrap 
                  bg-cyan-800 setanimation items-center "
      >
        {hospitalName}
      </div>
    </InteractiveCard>
    // <div
    //   className="w-1/4 h-[300px] rounded-lg shadow-lg
    //             border-4 border-cyan-950 shadow-md lookcard
    //             m-1"
    // >
    // </div>
  );
}

// import styles from "./card.module.css";
// import Image from "next/image";
// import InteractiveCard from "./InteractiveCard";
// import { Rating } from "@mui/material";

// export default function Card({
//   hospitalName,
//   imgSrc,
//   rating,
//   onShowRating,
// }: {
//   hospitalName: string;
//   imgSrc: string;
//   rating?: number;
//   onShowRating?: Function;
// }) {
//   return (
//     <InteractiveCard>
//       <div className="w-full h-[70%] relative rounded-t-lg">
//         <Image
//           src={imgSrc}
//           alt="reduce risk"
//           fill={true}
//           className="object-cover rounded-t-lg"
//         />
//       </div>
//       <div
//         className="w-full h-[15%] p-[10px]
//                   text-slate-100 font-sans font-normal text-lg text-center text-wrap
//                   bg-cyan-800 setanimation"
//       >
//         {hospitalName}
//       </div>
//       {rating && onShowRating ? (
//         <div
//           className="w-full h-[15%] p-[5px]
//                   text-slate-100 font-sans font-normal text-lg text-center text-wrap
//                   bg-cyan-800"
//         >
//           <Rating
//             id={hospitalName + " Rating"}
//             name={hospitalName + " Rating"}
//             data-testid={hospitalName + " Rating"}
//             size="large"
//             value={rating}
//             onChange={(e, newRating) => {
//               e.stopPropagation();
//               onShowRating(hospitalName, newRating);
//             }}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       ) : (
//         ""
//       )}
//     </InteractiveCard>
//   );
// }
