import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { ConsultationCard } from '@/components/consultation/ConsultationCard';
import { mockConsultations } from '@/data/mock';
import { MessageSquare } from 'lucide-react';

export default function KonsultacjePage() {
  const activeConsultations = mockConsultations.filter((c) => c.isActive);
  const closedConsultations = mockConsultations.filter((c) => !c.isActive);

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto p-6 pt-16">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Konsultacje społeczne</h1>
            <p className="text-muted-foreground">
              Weź udział w tworzeniu prawa - Twój głos ma znaczenie
            </p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Aktywne konsultacje ({activeConsultations.length})
          </h2>
          <div className="space-y-4">
            {activeConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} />
            ))}
            {activeConsultations.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Brak aktywnych konsultacji.
              </p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Zakończone konsultacje ({closedConsultations.length})
          </h2>
          <div className="space-y-4">
            {closedConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
