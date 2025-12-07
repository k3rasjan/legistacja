'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from './button';

interface BackButtonProps {
  defaultHref?: string;
  className?: string;
}

export function BackButton({ defaultHref = '/', className = '' }: BackButtonProps) {
  const searchParams = useSearchParams();
  const fromSummary = searchParams.get('from') === 'summary';

  const href = fromSummary ? '/wrapped/podsumowanie' : defaultHref;

  return (
    <Link href={href} className={className}>
      <Button variant="ghost" size="icon" className="bg-background rounded-lg h-9 w-9 sm:h-10 sm:w-10">
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </Link>
  );
}
