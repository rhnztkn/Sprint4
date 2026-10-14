import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface Etkinlik {
  id: number;
  baslik: string;
  tarih: string;
  mekan: string;
}

export default function Etkinlikler() {
  const [etkinlikler, setEtkinlikler] = useState<Etkinlik[]>([]);

  useEffect(() => {
    setEtkinlikler([
      { id: 1, baslik: "Bahar Şenliği Konseri", tarih: "2026-05-15", mekan: "Ana Kampüs Çim Alan" },
      { id: 2, baslik: "Yazılım Zirvesi", tarih: "2026-11-20", mekan: "Mühendislik Fakültesi Konferans Salonu" },
      { id: 3, baslik: "Tiyatro Gösterisi", tarih: "2026-12-10", mekan: "Kültür Merkezi" }
    ]);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #dee2e6', paddingBottom: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#343a40' }}>Tüm Etkinlikler</h2>
        <Link to="/ekle" style={{ background: '#28a745', color: 'white', padding: '8px 15px', textDecoration: 'none', borderRadius: '5px' }}>+ Yeni Ekle</Link>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {etkinlikler.map(e => (
          <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ced4da', padding: '15px', borderRadius: '5px' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{e.baslik}</h4>
              <span style={{ color: '#6c757d', fontSize: '14px' }}>📅 {e.tarih} | 📍 {e.mekan}</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to={`/detay/${e.id}`} style={{ background: '#17a2b8', color: 'white', padding: '6px 12px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px' }}>Detay</Link>
              <Link to={`/guncelle/${e.id}`} style={{ background: '#ffc107', color: 'black', padding: '6px 12px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px' }}>Güncelle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}