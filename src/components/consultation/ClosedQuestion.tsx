'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConsultationQuestion } from '@/types';
import { CheckCircle, BarChart3 } from 'lucide-react';

interface ClosedQuestionProps {
  question: ConsultationQuestion;
  isActive: boolean;
  showResults?: boolean;
}

export function ClosedQuestion({ question, isActive, showResults = false }: ClosedQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(showResults);

  const totalVotes = question.responses?.reduce((a, b) => a + b, 0) || 0;

  const handleVote = () => {
    if (selectedOption !== null) {
      setHasVoted(true);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-2 mb-4">
          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
          <h3 className="font-medium">{question.question}</h3>
        </div>

        {!hasVoted && isActive ? (
          <div className="space-y-2">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedOption === index
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {option}
              </button>
            ))}
            <Button
              onClick={handleVote}
              disabled={selectedOption === null}
              className="mt-4"
            >
              Zagłosuj
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {question.options?.map((option, index) => {
              const votes = question.responses?.[index] || 0;
              const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;

              return (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{option}</span>
                    <span className="font-medium">{percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{votes} głosów</p>
                </div>
              );
            })}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
              <BarChart3 className="h-4 w-4" />
              <span>Łącznie {totalVotes} głosów</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
