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
        <h2 className="border-b border-white/[0.07] pb-3 text-xl font-bold tracking-tight text-white">
          About the Author
        </h2>
        <p className="leading-relaxed text-white/65">
          Hi, I&apos;m Jatinder Sandhu, a Full-Stack Developer with 6+ years of experience building websites, web applications, business management systems, and AI-powered solutions using technologies like Next.js, React, Node.js, and MongoDB.
        </p>
        <p className="leading-relaxed text-white/65">
          I share practical technology guides, development tutorials, and business growth insights based on real-world experience working on client projects.
        </p>
        <p className="leading-relaxed text-white/65">
          If you&apos;re looking to build a website, custom software, business automation system, or AI-powered solution, explore my portfolio at{' '}
          <a
            href="https://jatinder.malwaland.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline-offset-2 hover:underline"
          >
            jatinder.malwaland.com
          </a>.
        </p>
      </section>

      {relatedArticles && relatedArticles.length > 0 && (
        <section id="related-articles" className="space-y-4">
          <h2 className="border-b border-white/[0.07] pb-3 text-xl font-bold tracking-tight text-white">
            Related Articles
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/55">
            {relatedArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-gold underline-offset-2 hover:underline"
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
