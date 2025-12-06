import { notFound } from 'next/navigation';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { TrainStatusBar } from '@/components/ustawa/TrainStatusBar';
import { PostCard } from '@/components/feed/PostCard';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';
import { mockUstawy, mockUpdates } from '@/data/mock';
import { Button } from '@/components/ui/button';
import { FollowButton } from '@/components/ui/FollowButton';
import { ArrowLeft } from 'lucide-react';
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

  return (
    <div className="min-h-screen">
      <HamburgerMenu />

      <div className="flex">
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background pt-16 px-4 overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-6">
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

          <FollowButton variant="bell" size="default" fullWidth className="mb-6" />

          <div className="border-t border-border pt-4">
            <h2 className="text-sm font-semibold text-muted-foreground mb-2">Status procesu</h2>
            <TrainStatusBar currentStatus={ustawa.status} />
          </div>
        </aside>

        <main className="ml-64 flex-1 p-6 pt-16">
          <div className="max-w-2xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">{ustawa.title}</h2>
              <p className="text-muted-foreground">{ustawa.description}</p>
            </div>

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
