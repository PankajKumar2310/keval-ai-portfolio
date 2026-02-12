import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogs";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "All Blogs - Keval AI | Complete Blog Archive",
  description: "Browse all our articles on software development, AI integration, and digital transformation for Belgian businesses.",
};

export default function AllBlogsPage() {
  const orange = "#FF7D32";

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      <Headers />
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #FF7D32 0%, #FF5A1F 100%)',
        padding: '100px 0',
        textAlign: 'center',
        color: '#fff'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            fontFamily: 'Teko, sans-serif',
            textTransform: 'uppercase',
            lineHeight: '1.1'
          }}>
            All Blogs
          </h1>
          <p style={{
            fontSize: '18px',
            margin: '0',
            opacity: '0.9',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Complete archive of our insights on software development and technology
          </p>
        </div>
      </div>

      {/* All Blogs Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="col-lg-6 mb-4">
                <div className="shadow-sm h-100" style={{
                  background: '#fff',
                  border: '1px solid #eee',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  <div style={{ position: 'relative', width: '250px', minHeight: '200px' }}>
                    <Image 
                      src={blog.bannerImage} 
                      alt={blog.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '30px', flex: '1' }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span style={{ 
                        color: orange, 
                        fontWeight: '600', 
                        textTransform: 'uppercase', 
                        letterSpacing: '1px', 
                        fontFamily: 'Teko, sans-serif',
                        fontSize: '14px'
                      }}>
                        {blog.category}
                      </span>
                      <span style={{ color: '#888', fontSize: '14px' }}>
                        {blog.publishDate}
                      </span>
                    </div>
                    <h3 style={{ 
                      fontSize: '20px', 
                      fontWeight: '700', 
                      marginBottom: '15px', 
                      color: '#000', 
                      lineHeight: '1.3' 
                    }}>
                      {blog.title}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#666', 
                      marginBottom: '20px', 
                      lineHeight: '1.6' 
                    }}>
                      {blog.metaDescription}
                    </p>
                    <Link 
                      href={`/blog/${blog.slug}`} 
                      className="text-decoration-none" 
                      style={{
                        background: orange,
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        display: 'inline-block',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
