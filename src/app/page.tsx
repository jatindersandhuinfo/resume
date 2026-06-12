import CinematicNav from '@/components/CinematicNav';
import { Chapter1Opening }    from '@/components/chapters/Chapter1Opening';
import { Chapter2ForWho }     from '@/components/chapters/Chapter2ForWho';
import { Chapter3Projects }   from '@/components/chapters/Chapter3Projects';
import { Chapter4Process }    from '@/components/chapters/Chapter4Process';
import { Chapter5Philosophy } from '@/components/chapters/Chapter5Philosophy';
import { Chapter6Proof }      from '@/components/chapters/Chapter6Proof';
import { Chapter7Conversion } from '@/components/chapters/Chapter7Conversion';

import { projects } from '@/lib/data';

export default function Home() {
  // Featured projects are marked with `featured: true` in data.ts
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main id="main-content" className="bg-studio text-canvas">
      <CinematicNav />
      <Chapter1Opening />
      <Chapter2ForWho />
      <Chapter3Projects projects={featuredProjects} />
      <Chapter4Process />
      <Chapter5Philosophy />
      <Chapter6Proof projects={projects} />
      <Chapter7Conversion />
    </main>
  );
}
