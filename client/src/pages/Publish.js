import * as React from "react";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import Box from "@mui/material/Box";

import PublishNewPodcast from "../components/PublishNewPodcast";

const Publish = () => {
  return (
    <Box mt="90px" flexGrow={1}>
      <WidgetLoader />
      <PublishNewPodcast />
    </Box>
  );
};

export default Publish;
