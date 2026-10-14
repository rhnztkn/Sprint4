export default function AnaSayfa() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <h1 style={{ color: '#343a40', fontSize: '36px' }}>Kampüs Etkinlik Yönetim Sistemine Hoş Geldiniz</h1>
      <p style={{ fontSize: '18px', color: '#6c757d', marginTop: '15px', lineHeight: '1.6' }}>
        Üniversitemizdeki tüm etkinlikleri buradan takip edebilir, yeni etkinlik ekleyebilir ve 
        mevcut etkinlikleri güncelleyebilirsiniz. Bu sistem Sprint 4 kapsamında React ile geliştirilmiştir.
      </p>
      <a href="/etkinlikler" style={{ display: 'inline-block', marginTop: '30px', padding: '12px 24px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '18px' }}>
        Etkinlikleri Görüntüle
      </a>
    </div>
  );
}