'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConsultationQuestion } from '@/types';
import { MessageSquare, Send } from 'lucide-react';

interface OpenQuestionProps {
  question: ConsultationQuestion;
  isActive: boolean;
}

export function OpenQuestion({ question, isActive }: OpenQuestionProps) {
  const [response, setResponse] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = () => {
    if (response.trim()) {
      setHasSubmitted(true);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-purple-500 mt-0.5" />
          <h3 className="font-medium">{question.question}</h3>
        </div>

        {!hasSubmitted && isActive ? (
          <div className="space-y-3">
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Wpisz swoją odpowiedź..."
              className="w-full min-h-[120px] p-3 rounded-lg border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              onClick={handleSubmit}
              disabled={!response.trim()}
            >
              <Send className="h-4 w-4 mr-2" />
              Wyślij odpowiedź
            </Button>
          </div>
        ) : hasSubmitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg">
            <p className="font-medium">Dziękujemy za Twoją odpowiedź!</p>
            <p className="text-sm mt-1">Twoja opinia zostanie uwzględniona w procesie legislacyjnym.</p>
          </div>
        ) : (
          <div className="bg-muted p-4 rounded-lg text-muted-foreground">
            <p>Konsultacje zostały zakończone. Odpowiedzi nie są już przyjmowane.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
