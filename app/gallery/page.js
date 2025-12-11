"use client";

export default function Gallery() {
    const styles = {
        header: {
            padding: '4rem 0',
            textAlign: 'center',
        },
        masonry: {
            columnCount: 3,
            columnGap: '1.5rem',
        },
        item: {
            breakInside: 'avoid',
            marginBottom: '1.5rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '2px solid var(--color-border)',
            position: 'relative',
        },
        image: {
            width: '100%',
            display: 'block',
            transition: 'transform 0.4s ease',
        },
        caption: {
            padding: '0.75rem',
            textAlign: 'center',
            fontSize: '1rem',
            fontFamily: "'VT323', monospace",
            color: 'var(--color-primary)',
            background: 'rgba(0,0,0,0.5)',
        }
    };

    const photos = [
        { src: '/gallery/younis-miner.jpg', caption: 'Happy Miner: Found Diamonds! 💎' },
        { src: '/gallery/younis-thumbsup.jpg', caption: 'Crafting Success! 👍' },
        { src: '/gallery/younis-ride.jpg', caption: 'Minecart Adventure 🎢' },
        { src: '/gallery/younis-duo.jpg', caption: 'Multiplayer Mode 🎮' },
        { src: '/gallery/younis-explorer.jpg', caption: 'Exploring the Overworld 🌲' },
    ];

    return (
        <div className="container">
            <div style={styles.header}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Photo Gallery</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Snapshots from my life.</p>
            </div>

            <div style={styles.masonry}>
                {photos.map((photo, index) => (
                    <div key={index} style={styles.item} className="gallery-item">
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            style={styles.image}
                            loading="lazy"
                        />
                        <div style={styles.caption}>{photo.caption}</div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .masonry { column-count: 2 !important; }
        }
        @media (max-width: 480px) {
          .masonry { column-count: 1 !important; }
        }
      `}</style>
        </div>
    );
}
