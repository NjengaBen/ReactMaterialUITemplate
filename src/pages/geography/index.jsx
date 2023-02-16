import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoMap from "../../components/GeoMap";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoMap />
      </Box>
    </Box>
  );
};

export default Geography;
