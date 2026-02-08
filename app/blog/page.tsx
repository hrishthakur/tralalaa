import { blogs } from '@/data/blogs';
import BlogCard from '@/components/blog-card';
import { SITE_CONFIG } from '@/lib/site';

/* ================= METADATA ================= */

export const metadata = {
  title: `Travel & Remote Work Blog | ${SITE_CONFIG.name}`,
  description: `Stories, guides, and tips on remote work, slow travel, and work-friendly stays by ${SITE_CONFIG.name}.`,
};

/* ================= PAGE ================= */

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Travel & Remote Work Blog
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-slate-600">
          Stories, guides, and insights on working remotely from the mountains with {SITE_CONFIG.name}.
        </p>
      </header>

      {/* BLOG GRID */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </section>
    </main>
  );
}
