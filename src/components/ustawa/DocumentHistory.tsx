'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { DocumentVersion } from '@/types';
import { FileText, Download, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';

const PdfViewer = dynamic(() => import('./PdfViewer').then(mod => ({ default: mod.PdfViewer })), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-muted">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  ),
});

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
  const sortedVersions = versions.length > 0 ? [...versions].reverse() : [];
  const [selectedVersion, setSelectedVersion] = useState<DocumentVersion | null>(
    sortedVersions[0] ?? null
  );
  const [isVersionListOpen, setIsVersionListOpen] = useState(false);

  if (versions.length === 0) return null;

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      {/* Header with version selector */}
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 rounded-lg bg-primary text-primary-foreground">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">Dokument</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{versions.length} wersji</p>
          </div>
        </div>

        {selectedVersion && (
          <a
            href={selectedVersion.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Pobierz</span>
          </a>
        )}
      </div>

      {/* Version selector dropdown */}
      {versions.length > 1 && (
        <div className="border-b border-border">
          <button
            onClick={() => setIsVersionListOpen(!isVersionListOpen)}
            className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-accent/50 transition-colors text-left"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-muted-foreground">Wersja:</span>
              {selectedVersion && (
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-medium text-sm sm:text-base">{selectedVersion.version}</span>
                  {sortedVersions[0].id === selectedVersion.id && (
                    <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                      Aktualna
                    </span>
                  )}
                </div>
              )}
            </div>
            {isVersionListOpen ? (
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            )}
          </button>

          {isVersionListOpen && (
            <div className="border-t border-border bg-background">
              {sortedVersions.map((version, index) => (
                <button
                  key={version.id}
                  onClick={() => {
                    setSelectedVersion(version);
                    setIsVersionListOpen(false);
                  }}
                  className={`w-full flex gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent transition-colors border-b border-border last:border-b-0 text-left ${
                    selectedVersion?.id === version.id ? 'bg-accent/50' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <span className="font-medium text-sm sm:text-base">Wersja {version.version}</span>
                      {index === 0 && (
                        <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                          Aktualna
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1 truncate">
                      {version.description}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {formatDate(version.date)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Inline PDF Viewer */}
      {selectedVersion && (
        <div className="h-[500px] sm:h-[600px] md:h-[700px] w-full bg-muted">
          <PdfViewer
            url={selectedVersion.url}
            title={`Dokument wersja ${selectedVersion.version}`}
          />
        </div>
      )}
    </div>
  );
}
