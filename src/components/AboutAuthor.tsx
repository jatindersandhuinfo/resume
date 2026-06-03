import Link from 'next/link';

interface RelatedArticle {
  slug: string;
  title: string;
}

interface AboutAuthorProps {
  relatedArticles: RelatedArticle[];
}

export default function AboutAuthor({ relatedArticles }: AboutAuthorProps) {
  return (
    <>
      <section id="about-author" className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
          About the Author
        </h2>
        <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
          Hi, I&apos;m Jatinder Sandhu, a Full-Stack Developer with 5+ years of experience building websites, web applications, business management systems, and AI-powered solutions using technologies like Next.js, React, Node.js, and MongoDB.
        </p>
        <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
          I share practical technology guides, development tutorials, and business growth insights based on real-world experience working on client projects.
        </p>
        <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
          If you&apos;re looking to build a website, custom software, business automation system, or AI-powered solution, you can explore my portfolio and recent projects at{' '}
          <a
            href="https://jatinder.malwaland.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d6ad63] hover:underline"
          >
            jatinder.malwaland.com
          </a>.
        </p>
      </section>

      {relatedArticles && relatedArticles.length > 0 && (
        <section id="related-articles" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
            Related Articles
          </h2>
          <ul className="pl-5 list-disc text-xs sm:text-sm text-black/65 dark:text-white/65 space-y-2 mt-2">
            {relatedArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-[#d6ad63] hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
