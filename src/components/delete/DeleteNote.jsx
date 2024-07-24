import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const DeleteNote = ({ deleteNote }) => {
  const { notes, setNotes, setArchiveNotes, deleteNotes, setDeleteNotes } =
    useContext(DataContext);

  const restoreNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };

  const removeNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{deleteNote.heading} </Typography>
        <Typography>{deleteNote.text} </Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          onClick={() => removeNote(deleteNote)}
          style={{ marginLeft: "auto" }}
        />

        <Restore fontSize="small" onClick={() => restoreNote(deleteNote)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
