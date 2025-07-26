import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// エラーを無視するBoundary
class IgnoreIframeErrors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Ignored iframe error:", error);
  }

  render() {
    return this.props.children;
  }
}

export default function App() {
  const [openForm, setOpenForm] = React.useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  // グローバルエラーを無視
  React.useEffect(() => {
    window.onerror = () => true;
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>お問い合わせフォーム</h1>

      {/* Googleフォームを開くボタン */}
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

      {/* Instagramの埋め込み（常時表示） */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <IgnoreIframeErrors>
          <iframe
            src="https://www.instagram.com/p/DHr6i2iSft-/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            title="Instagram Video"
            style={{
              borderRadius: "8px",
              maxWidth: "90%",
            }}
          />
        </IgnoreIframeErrors>
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
