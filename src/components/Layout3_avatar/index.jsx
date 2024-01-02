import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


export function Gallery({children}){
    return(
        <Grid2 container spacing={2} justifyContent="center">
            {children}
        </Grid2>
    )
}
export function GalleryAvatar({children}){
    return(
        <Grid2 
            item xs={4} sm={3} md={3} lg={2} xl={1}
            sx={{display: "flex", 'flex-direction': "column", 'align-items': "center" }}
        >
            
            {children}
            
        </Grid2>
    )
}