import React, { useState } from "react";
import AppLayout from '../../components/AppLayout/AppLayout';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pd from "../../images/footer/politicas.pdf";
import "./Politicas.css";

const Politicas = (props) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
  return (
    <AppLayout>
      <Document
        file={pd}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </AppLayout>
  );
};

export default Politicas;
