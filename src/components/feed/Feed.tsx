'use client';

import { FullscreenPost } from './FullscreenPost';
import { mockUpdates } from '@/data/mock';

export function Feed() {
  const sortedUpdates = [...mockUpdates].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sortedUpdates.map((update) => (
        <FullscreenPost key={update.id} update={update} />
      ))}
    </div>
  );
}
