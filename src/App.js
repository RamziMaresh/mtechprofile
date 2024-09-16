import React from "react";
import samplePDF from "./sample.pdf";
import AllPagesPDFViewer from "./components/pdf/all-pages";

import "./styles.css";

export default function App() {
  return (
    
    <div className="App">
            <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>
    </div>
  );
}
