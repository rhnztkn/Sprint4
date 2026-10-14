import { useParams, Link } from 'react-router-dom';

export default function EtkinlikGuncelle() {
  const { id } = useParams();

  const guncelle = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Etkinlik ID: ${id} başarıyla güncellendi!`);
  };

  const inputStyle = { width: '100%', padding: '10px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ced4da', borderRadius: '4px', boxSizing: 'border-box' as const };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #dee2e6', paddingBottom: '10px' }}>
        <h2 style={{ color: '#343a40', margin: 0 }}>Etkinlik Güncelle (ID: {id})</h2>
        <Link to="/etkinlikler" style={{ textDecoration: 'none', color: '#007bff' }}>&larr; Geri Dön</Link>
      </div>
      <form onSubmit={guncelle} style={{ marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Yeni Başlık</label>
        <input type="text" defaultValue="Bahar Şenliği Konseri" style={inputStyle} />

        <label style={{ fontWeight: 'bold' }}>Yeni Tarih</label>
        <input type="date" defaultValue="2026-05-15" style={inputStyle} />

        <button type="submit" style={{ width: '100%', background: '#ffc107', color: 'black', border: 'none', padding: '12px', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Değişiklikleri Kaydet</button>
      </form>
    </div>
  );
}