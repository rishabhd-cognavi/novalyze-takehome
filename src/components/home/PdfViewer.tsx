import { useState } from "react";
import { motion } from "framer-motion"; // Correct import from framer-motion
import { Document, Page, pdfjs } from "react-pdf";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import "react-pdf/dist/esm/Page/TextLayer.css";
import samplePdf from "../../resources/sample.pdf"; // Import the sample PDF

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1.0); // State variable for zoom level

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setError(null); // Clear any previous errors
  }

  function onDocumentLoadError(error: Error): void {
    setError(error.message);
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.1, 2.0)); // Increase scale, max 2.0
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Decrease scale, min 0.5
  }

  return (
    <div className="w-full h-full p-5 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-5 ">
        <h1 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
          PDF Viewer
        </h1>
        <div className="flex justify-center gap-4 mb-5">
          <button
            onClick={zoomOut}
            className="px-4 py-2 bg-gray-600 dark:bg-gray-300 rounded-md mr-2 text-xl">
            <FiMinus className="size-5 text-white dark:text-black" />
          </button>
          <button
            onClick={zoomIn}
            className="px-4 py-2 bg-gray-600 dark:bg-gray-300 rounded-md text-xl">
            <IoMdAdd className="size-5 text-white dark:text-black" />
          </button>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl bg-white shadow-md w-full overflow-auto flex flex-col items-center">
        {error ? (
          <div className="text-red-500">Failed to load PDF file: {error}</div>
        ) : (
          <Document
            loading={<div>Loading...</div>}
            file={samplePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}>
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="w-full max-w-full h-auto"
                scale={scale} // Apply the scale to the Page component
              />
            ))}
          </Document>
        )}
      </motion.div>
    </div>
  );
}
