function GoogleFormEmbed() {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdo2LNhPW8NVimLMzytQIto1eMVlzyIL8TYDoCBibYbLggQeg/viewform?embedded=true"
        width="100%"
        height="600"
        style={{ border: "none" }}
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        読み込んでいます…
      </iframe>
    </div>
  );
}

export default GoogleFormEmbed;
