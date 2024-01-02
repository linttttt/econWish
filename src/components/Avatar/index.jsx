import "./index.css";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Image from "mui-image";

import Stack from '@mui/material/Stack';
import bschool from './img/bschool.svg?w=14&h=14&fit=crop&auto=format';
import eagle from './img/eagle.svg';
import gate from './img/gate.svg';
import { colors } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


// export function Gallery({children}){
//     return(
//         <Grid2 container spacing={2} justifyContent="center">
//             {children}
//         </Grid2>
//         <Grid2 item xs={12} sm={"auto"} md={6} lg={4} xl={3}></Grid2>
//         <Stack direction="row" spacing={2} sx={{ 'justify-content': "center" }}></Stack> 
//     )
// }
// export default function ImageAvatars({imgSrc, name}) {

//   name = name? name:"匿名"

//   return (
//       <GalleryItem item xs={2} sm={"auto"} md={2} lg={2} xl={2}>
//           <MemberAvatar imgSrc="es.svg" name={name} />

//           <MemberAvatar imgSrc={eagle} name={0} />
//           <MemberAvatar imgSrc={gate} name={0} />
//           <MemberAvatar imgSrc="es.svg" name={0} />

//           <MemberAvatar imgSrc={eagle} name={0} />
//           <MemberAvatar imgSrc={gate} name={0} />
//       </GalleryItem>
//   );
// }

export default function MemberAvatar({ user }) {

  const { imgSrc, name } = user

  return (
    <div className="member">
      <Avatar sx={{ width: 50, height: 50, border: "1.5px solid #000000", bgcolor: "#ffffff", padding: "10px" }}>
        <Image
          duration={0}
          src={imgSrc}
          width="100%"
          height="100%"
          fit="fill"
          errorIcon={<SentimentSatisfiedAltIcon />}
        />
      </Avatar>
      <div className="memeber-name">{name}</div>
    </div>
  )
}

// function GalleryItem({children}){
//   return(
//       <Grid2 item xs={12} sm={"auto"} md={6} lg={4} xl={3} >
          
//           {children}
          
//       </Grid2>
//   )
// }