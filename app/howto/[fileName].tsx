import React from 'react';
import PdfViewer from '../../components/PdfViewer';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const PdfPage = ({ fileUrl }: { fileUrl: string }) => {
  const router = useRouter();
  const { fileName } = router.query;
  // Remove the parameter declaration since it is already declared in the function body
  // const fileUrl = `/howto/${fileName}.pdf`;

  return (
    <div>
      <h1>{fileName}</h1>
      <PdfViewer fileUrl={fileUrl} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const pdfDirectory = path.join(process.cwd(), 'public/howto');
  const files = fs.readdirSync(pdfDirectory);

  const paths = files.map((file) => ({
    params: {
      fileName: file.replace('.pdf', ''),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const pdfDirectory = path.join(process.cwd(), 'public/howto');
  const files = fs.readdirSync(pdfDirectory);

  return {
    props: {
      pdfFiles: files,
    },
  };
};

export default PdfPage;
