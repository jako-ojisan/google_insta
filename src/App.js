import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function GoogleFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>お問い合わせフォーム</h1>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{
          backgroundColor: "#4285F4",
          fontSize: "18px",
          padding: "12px 24px",
        }}
      >
        フォームを開く
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Googleフォーム</DialogTitle>
        <DialogContent style={{ height: "600px" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdo2LNhPW8NVimLMzytQIto1eMVlzyIL8TYDoCBibYbLggQeg/viewform?usp=header"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Google Form"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
