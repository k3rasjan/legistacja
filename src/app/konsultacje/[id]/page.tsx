import { notFound } from 'next/navigation';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { ConsultationDetail } from '@/components/consultation/ConsultationDetail';
import { mockConsultations } from '@/data/mock';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ConsultationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const consultation = mockConsultations.find((c) => c.id === id);

  if (!consultation) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <HamburgerMenu />
      <ConsultationDetail consultation={consultation} />
    </div>
  );
}
