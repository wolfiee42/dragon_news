import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBarNews from "@/components/ui/SideBarNews/SideBarNews";
import { Box, Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBarNews />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;