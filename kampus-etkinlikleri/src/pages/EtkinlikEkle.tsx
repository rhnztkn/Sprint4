import { useState } from 'react';

export default function EtkinlikEkle() {
  const [form, setForm] = useState({ baslik: '', tarih: '', mekan: '', aciklama: '' });

  const kaydet = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`"${form.baslik}" etkinliği sisteme eklendi! (Arayüz simülasyonu)`);
    setForm({ baslik: '', tarih: '', mekan: '', aciklama: '' });
  };

  const inputStyle = { width: '100%', padding: '10px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ced4da', borderRadius: '4px', boxSizing: 'border-box' as const };

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #dee2e6', paddingBottom: '10px', color: '#343a40' }}>Yeni Etkinlik Ekle</h2>
      <form onSubmit={kaydet} style={{ marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold', color: '#495057' }}>Etkinlik Başlığı</label>
        <input type="text" value={form.baslik} onChange={e => setForm({...form, baslik: e.target.value})} required style={inputStyle} />

        <label style={{ fontWeight: 'bold', color: '#495057' }}>Tarih</label>
        <input type="date" value={form.tarih} onChange={e => setForm({...form, tarih: e.target.value})} required style={inputStyle} />

        <label style={{ fontWeight: 'bold', color: '#495057' }}>Mekan</label>
        <input type="text" value={form.mekan} onChange={e => setForm({...form, mekan: e.target.value})} required style={inputStyle} />

        <label style={{ fontWeight: 'bold', color: '#495057' }}>Detaylı Açıklama</label>
        <textarea rows={4} value={form.aciklama} onChange={e => setForm({...form, aciklama: e.target.value})} required style={inputStyle}></textarea>

        <button type="submit" style={{ width: '100%', background: '#28a745', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Kaydet</button>
      </form>
    </div>
  );
}