import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function App() {
  const [openForm, setOpenForm] = React.useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  // Instagramスクリプト読み込み & 再レンダリング処理
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>お問い合わせフォーム</h1>
      <Button
        variant="contained"
        onClick={handleOpenForm}
        style={{
          backgroundColor: "#4285F4",
          fontSize: "18px",
          padding: "12px 24px",
          marginBottom: "30px",
        }}
      >
        フォームを開く
      </Button>

      {/* Instagram埋め込み */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DMky6IMB6JJ/?img_index"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "8px",
            boxShadow: "0 0 1px rgba(0,0,0,0.5),0 1px 10px rgba(0,0,0,0.15)",
            margin: "1px",
            padding: 0,
            maxWidth: "540px",
            width: "100%",
          }}
        ></blockquote>
      </div>

      {/* Googleフォームモーダル */}
      <Dialog open={openForm} onClose={handleCloseForm} fullWidth maxWidth="md">
        <DialogTitle>Googleフォーム</DialogTitle>
        <DialogContent style={{ height: "600px" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdo2LNhPW8NVimLMzytQIto1eMVlzyIL8TYDoCBibYbLggQeg/viewform?embedded=true"
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
