import { useState } from "react";
import QRCode from "react-qr-code";
import '../QR_Code/styles.css';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateCode = () => {
    setQrCode(input);
    setInput('');
  };

  return (
    <div className="qrContainer">
      <h1> Alex's QR Code Generator</h1>
      <div>
        <input
          onChange={(event) => setInput(event.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
