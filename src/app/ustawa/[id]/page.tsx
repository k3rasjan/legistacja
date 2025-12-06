import { notFound } from 'next/navigation';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { TrainStatusBar } from '@/components/ustawa/TrainStatusBar';
import { DocumentHistory } from '@/components/ustawa/DocumentHistory';
import { PostCard } from '@/components/feed/PostCard';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { mockUstawy, mockUpdates, mockConsultations } from '@/data/mock';
import { categoryLabels } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FollowButton } from '@/components/ui/FollowButton';
import { ArrowLeft, MessageSquare, Lightbulb, Settings } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UstawaPage({ params }: PageProps) {
  const { id } = await params;
  const ustawa = mockUstawy.find((u) => u.id === id);

  if (!ustawa) {
    notFound();
  }

  const updates = mockUpdates
    .filter((u) => u.ustawaId === id)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const activeConsultations = mockConsultations.filter(
    (c) => c.ustawaId === id && c.isActive
  );

  return (
    <div className="min-h-screen">
      <HamburgerMenu offsetLeft />

      {/* Back arrow next to hamburger menu */}
      <Link href="/" className="fixed top-4 left-4 z-40">
        <Button variant="ghost" size="icon" className="bg-background rounded-lg">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </Link>

      {/* Document History - Top Right */}
      {ustawa.documentVersions && ustawa.documentVersions.length > 0 && (
        <DocumentHistory versions={ustawa.documentVersions} />
      )}

      <div className="flex">
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background pt-16 px-4 pb-6 overflow-y-auto">
          <div className="flex items-center gap-3 mb-4">
            <UstawaAvatar
              shortTitle={ustawa.shortTitle}
              status={ustawa.status}
              size="lg"
            />
            <div className="flex-1 min-w-0">
              <h1 className="font-bold text-lg truncate">{ustawa.shortTitle}</h1>
              <p className="text-sm text-muted-foreground truncate">{ustawa.ministry}</p>
            </div>
          </div>

          {ustawa.categories && ustawa.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {ustawa.categories.map((category) => (
                <Badge key={category} variant="outline" className="text-xs">
                  {categoryLabels[category]}
                </Badge>
              ))}
            </div>
          )}

          <FollowButton variant="bell" size="default" fullWidth className="mb-6" />

          {activeConsultations.length > 0 && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800 dark:text-green-200">
                  Aktywne konsultacje
                </span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                {activeConsultations.length === 1
                  ? 'Trwa 1 konsultacja społeczna'
                  : `Trwają ${activeConsultations.length} konsultacje społeczne`}
              </p>
              <Link href={`/konsultacje/${activeConsultations[0].id}`}>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  Weź udział
                </Button>
              </Link>
            </div>
          )}

          <div className="border-t border-border pt-4">
            <h2 className="text-sm font-semibold text-muted-foreground mb-2">Status procesu</h2>
            <TrainStatusBar currentStatus={ustawa.status} />
          </div>

          <div className="border-t border-border pt-4 mt-4">
            <Link href={`/admin/ustawa/${id}`}>
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="h-4 w-4 mr-2" />
                Panel administracyjny
              </Button>
            </Link>
          </div>
        </aside>

        <main className="ml-64 flex-1 p-6 pt-16">
          <div className="w-full">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">{ustawa.title}</h2>
              <p className="text-muted-foreground">{ustawa.description}</p>
            </div>

            {ustawa.userBenefits && (
              <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span className="font-semibold text-amber-800 dark:text-amber-200">
                    Co zyskujesz?
                  </span>
                </div>
                <p className="text-amber-900 dark:text-amber-100">
                  {ustawa.userBenefits}
                </p>
              </div>
            )}

            <h3 className="font-semibold mb-4">Aktualizacje ({updates.length})</h3>

            <div className="space-y-4">
              {updates.map((update) => (
                <PostCard key={update.id} update={update} />
              ))}
              {updates.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  Brak aktualizacji dla tej ustawy.
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
