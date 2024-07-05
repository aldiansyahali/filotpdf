"use client";

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


type Props = { pdf_url: string };


const PDFViewer = ({ pdf_url }: Props) => {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="w-full max-w-4xl h-screen max-h-screen overflow-y-scroll p-4 bg-gray-100 border rounded-lg shadow-lg">
        <Document file={pdf_url} onLoadSuccess={onDocumentLoadSuccess} className="flex flex-col items-center">
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} width={700} className="my-2" />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;