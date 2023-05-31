import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { forwardRef } from "react";

function DeleteDialog(props, ref) {
  function handleClose() {
    props.setOpen(false);
  }

  function handleDelete() {
    props.deleteFunction();
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{`Delete ${props.type}`}</DialogTitle>
      <DialogContent>
        {props.type === "resource" ? (
          <>
            The selected resource and all methods and resources under it will be
            deleted. Resources to be deleted :<br />
            <br />
            {ref.current.deleteList.map((item, index) => {
              return <Typography key={index}>{item}</Typography>;
            })}
          </>
        ) : (
          <DialogContentText>
            The selected method will be deleted.
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleDelete} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default forwardRef(DeleteDialog);
