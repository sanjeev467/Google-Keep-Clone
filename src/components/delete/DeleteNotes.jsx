import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

//components

import DeleteNote from "./DeleteNote";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        <Grid container style={{ marginTop: 16 }}>
          {deleteNotes.map((deleteNote) => (
            <Grid item>
              <DeleteNote deleteNote={deleteNote} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;
