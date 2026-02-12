import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogs } from '@/lib/blogs';
import BlogDetail from '@/components/BlogDetail';
import Headers from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogs.find(b => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.metaTitle,
    openGraph: {
      title: blog.metaTitle,
      images: [blog.bannerImage],
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Headers />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BlogDetail blog={blog} />
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
