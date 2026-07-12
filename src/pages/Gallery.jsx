import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    { id: 1, category: 'campus', title: 'College Entrance', src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=500' },
    { id: 2, category: 'academic', title: 'CSE Lab Session', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=500' },
    { id: 3, category: 'sports', title: 'Volleyball Tournament', src: 'https://images.unsplash.com/photo-1592656094270-b9623e1e902b?auto=format&fit=crop&q=80&w=800&h=500' },
    { id: 4, category: 'infra', title: 'Central Library', src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800&h=500' },
    { id: 5, category: 'academic', title: 'Electronics Lab Work', src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd37bd?auto=format&fit=crop&q=80&w=800&h=500' },
    { id: 6, category: 'campus', title: 'Green Campus Pathway', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500' }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus' },
    { id: 'academic', name: 'Academic Labs' },
    { id: 'sports', name: 'Sports Events' },
    { id: 'infra', name: 'Library & Infra' }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
        color: 'var(--white)',
        padding: '5rem 2rem 4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            Media Gallery
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            A visual journey through Ravindra College of Engineering for Women.
          </p>
        </div>
      </div>

      {/* Categories Switcher */}
      <div className="container" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                border: '1px solid var(--slate-200)',
                padding: '0.6rem 1.5rem',
                borderRadius: '25px',
                fontFamily: 'var(--font-display)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: filter === cat.id ? 'var(--primary-blue)' : 'var(--white)',
                color: filter === cat.id ? 'var(--white)' : 'var(--slate-700)',
                boxShadow: filter === cat.id ? '0 4px 10px rgba(11,34,64,0.15)' : 'none'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item.src)}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid var(--slate-200)',
                cursor: 'pointer',
                position: 'relative',
                height: '240px',
                background: 'var(--white)',
                transition: 'all 0.3s ease'
              }}
              className="gallery-card"
            >
              <img
                src={item.src}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                className="gallery-img"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'linear-gradient(to top, rgba(11,34,64,0.9), transparent)',
                padding: '1.5rem 1rem 1rem',
                color: 'var(--white)',
                textAlign: 'left'
              }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>
                  {item.title}
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox PopUp */}
      {lightboxImg && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(11, 34, 64, 0.95)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }} onClick={() => setLightboxImg(null)}>
          <button style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--white)',
            cursor: 'pointer'
          }}>
            <X size={32} />
          </button>
          <img
            src={lightboxImg}
            alt="Expanded view"
            style={{
              maxWidth: '90%',
              maxHeight: '85vh',
              borderRadius: '12px',
              border: '4px solid var(--white)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}
          />
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(11,34,64,0.12) !important;
        }
      `}</style>
    </div>
  );
}
