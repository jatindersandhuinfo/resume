import { Sidebar } from '@/components/cv/Sidebar';
import { CenterColumn } from '@/components/cv/CenterColumn';
import { RightColumn } from '@/components/cv/RightColumn';

export default function Home() {
  return (
    <main
      className="w-full max-w-[1440px] bg-white shadow-2xl flex flex-col md:flex-row min-h-screen overflow-hidden"
      style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.35)' }}
    >
      <Sidebar />
      <CenterColumn />
      <RightColumn />
    </main>
  );
}
