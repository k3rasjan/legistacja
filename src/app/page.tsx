import { Feed } from '@/components/feed/Feed';
import { HamburgerMenu } from '@/components/layout/HamburgerMenu';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <HamburgerMenu />
      <Feed />
    </div>
  );
}
