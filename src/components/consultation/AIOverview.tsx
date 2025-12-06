'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface AIOverviewProps {
  content: string;
  onContinue: () => void;
}

export function AIOverview({ content, onContinue }: AIOverviewProps) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check if content is short enough that no scrolling is needed
    const checkIfScrollable = () => {
      const { scrollHeight, clientHeight } = container;
      if (scrollHeight <= clientHeight + 50) {
        // Content fits on screen, no need to scroll
        setHasScrolledToBottom(true);
        setShowScrollHint(false);
      }
    };

    // Check on mount and after a short delay for content to render
    checkIfScrollable();
    const timer = setTimeout(checkIfScrollable, 100);

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;

      if (isAtBottom) {
        setHasScrolledToBottom(true);
        setShowScrollHint(false);
      }

      if (scrollTop > 100) {
        setShowScrollHint(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 pt-16"
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Podsumowanie AI</h1>
              <p className="text-muted-foreground">
                Przeczytaj podsumowanie przed udziałem w konsultacjach
              </p>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl font-bold mt-8 mb-4 first:mt-0">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 space-y-2">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">{children}</strong>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
          </div>

          <div className="h-32" />
        </div>
      </div>

      {showScrollHint && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground animate-bounce">
          <span className="text-sm mb-1">Przewiń w dół</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      )}

      <footer className="border-t border-border p-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link href="/konsultacje">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Wróć do konsultacji
            </Button>
          </Link>
          <Button
            onClick={onContinue}
            disabled={!hasScrolledToBottom}
            size="lg"
          >
            Przejdź do pytań
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
