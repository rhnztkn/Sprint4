import { useParams, Link } from 'react-router-dom';

export default function EtkinlikDetay() {
  const { id } = useParams();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #dee2e6', paddingBottom: '10px' }}>
        <h2 style={{ color: '#343a40', margin: 0 }}>Etkinlik Detayları (ID: {id})</h2>
        <Link to="/etkinlikler" style={{ textDecoration: 'none', color: '#007bff' }}>&larr; Geri Dön</Link>
      </div>
      <div style={{ marginTop: '20px', lineHeight: '1.8', fontSize: '16px', color: '#495057' }}>
        <p><strong>Başlık:</strong> Bahar Şenliği Konseri</p>
        <p><strong>Tarih:</strong> 15 Mayıs 2026</p>
        <p><strong>Mekan:</strong> Ana Kampüs Çim Alan</p>
        <p><strong>Açıklama:</strong> Bu etkinlik, her yıl düzenlenen geleneksel bahar şenliklerinin açılış konseridir. Tüm öğrencilerimiz davetlidir.</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Link to={`/guncelle/${id}`} style={{ background: '#ffc107', color: 'black', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>Bu Etkinliği Düzenle</Link>
      </div>
    </div>
  );
}