import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnaSayfa from './pages/AnaSayfa';
import Etkinlikler from './pages/Etkinlikler';
import EtkinlikEkle from './pages/EtkinlikEkle';
import EtkinlikGuncelle from './pages/EtkinlikGuncelle';
import EtkinlikDetay from './pages/EtkinlikDetay';

export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', margin: 0, padding: 0 }}>
        {/* Sprint 3'teki gibi Koyu Renkli Üst Menü (Navbar) */}
        <nav style={{ background: '#343a40', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Kampüs Etkinlikleri</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Ana Sayfa</Link>
            <Link to="/etkinlikler" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Etkinlikler</Link>
            <Link to="/ekle" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Etkinlik Ekle</Link>
          </div>
        </nav>

        {/* İçerik Alanı */}
        <div style={{ maxWidth: '900px', margin: '30px auto', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
            <Route path="/etkinlikler" element={<Etkinlikler />} />
            <Route path="/ekle" element={<EtkinlikEkle />} />
            <Route path="/guncelle/:id" element={<EtkinlikGuncelle />} />
            <Route path="/detay/:id" element={<EtkinlikDetay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}