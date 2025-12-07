'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfViewerProps {
  url: string;
  title?: string;
}

export function PdfViewer({ url, title }: PdfViewerProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      // Only show thumbnails tab
      defaultTabs[0],
    ],
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: (zoom) => {
          zoom(1);
        },
        onExitFullScreen: (zoom) => {
          zoom(1);
        },
      },
    },
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className="h-full w-full [&_.rpv-core__viewer]:h-full [&_.rpv-default-layout__container]:border-0">
        <Viewer
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={1}
          theme={{
            theme: 'auto',
          }}
        />
      </div>
    </Worker>
  );
}
