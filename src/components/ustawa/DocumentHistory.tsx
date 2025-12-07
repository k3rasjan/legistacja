'use client';

import { useState } from 'react';
import { DocumentVersion } from '@/types';
import { FileText, Eye, X, Download, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DocumentHistoryProps {
  versions: DocumentVersion[];
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function DocumentHistory({ versions }: DocumentHistoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewingDocument, setViewingDocument] = useState<DocumentVersion | null>(null);

  if (versions.length === 0) return null;

  const sortedVersions = [...versions].reverse();

  const handleViewDocument = (version: DocumentVersion) => {
    setViewingDocument(version);
  };

  const handleCloseViewer = () => {
    setViewingDocument(null);
  };

  return (
    <>
      {/* Document Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
        title="Dokumenty"
      >
        <FileText className="h-5 w-5" />
      </button>

      {/* Panel */}
      {isOpen && !viewingDocument && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* History Panel */}
          <div className="fixed top-16 right-4 z-50 w-96 max-h-[80vh] bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
              <div>
                <h3 className="font-semibold">Historia dokumentu</h3>
                <p className="text-sm text-muted-foreground">{versions.length} wersji</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-accent rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Version List */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
              {sortedVersions.map((version, index) => (
                <button
                  key={version.id}
                  onClick={() => handleViewDocument(version)}
                  className="w-full flex gap-4 p-4 hover:bg-accent transition-colors border-b border-border last:border-b-0 text-left"
                >
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-lg ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <FileText className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Wersja {version.version}</span>
                      {index === 0 && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                          Aktualna
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-foreground mb-1">
                      {version.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(version.date)}
                    </p>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Document Viewer Modal */}
      {viewingDocument && (
        <div className="fixed inset-0 z-50 bg-background">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseViewer}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Wróć
              </Button>
              <div>
                <h3 className="font-semibold">Wersja {viewingDocument.version}</h3>
                <p className="text-sm text-muted-foreground">{viewingDocument.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={viewingDocument.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Pobierz
              </a>
              <button
                onClick={handleCloseViewer}
                className="p-2 hover:bg-accent rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="h-[calc(100vh-73px)] w-full">
            <iframe
              src={viewingDocument.url}
              className="w-full h-full border-0"
              title={`Dokument wersja ${viewingDocument.version}`}
            />
          </div>
        </div>
      )}
    </>
  );
}
