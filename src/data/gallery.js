export const GALLERY_STYLES = [
    'fineline',
    'blackwork',
    'realism',
    'traditional',
    'dotwork',
    'lettering',
  ]
  
  /**
   * Admin-lite ready shape:
   * - translatable fields: title/description
   * - filterable fields: styles[], placement, colorMode, artistId
   * - sortable field: date (ISO)
   */
  export const galleryItems = [
    {
      id: 'g001',
      image: 'https://images.unsplash.com/photo-1520975958225-1b618a3b4a8c?auto=format&fit=crop&w=1200&q=80',
      title: { en: 'Sacred Linework', es: 'Linework Sagrado', it: 'Linework Sacro' },
      description: {
        en: 'Fine lines + soft shading. Clean composition built for chest/forearm.',
        es: 'Líneas finas + sombreado suave. Composición limpia para pecho/antebrazo.',
        it: 'Linee sottili + ombreggiatura morbida. Composizione pulita per petto/avambraccio.',
      },
      date: '2026-01-12',
      styles: ['fineline', 'dotwork'],
      placement: 'forearm',
      colorMode: 'black',
      artistId: 'a001',
    },
    {
      id: 'g002',
      image: 'https://images.unsplash.com/photo-1520975682031-a5dba2a8f2d7?auto=format&fit=crop&w=1200&q=80',
      title: { en: 'Bold Black', es: 'Negro Intenso', it: 'Nero Deciso' },
      description: {
        en: 'High-contrast blackwork with heavy shapes. Strong from distance.',
        es: 'Blackwork de alto contraste con formas sólidas. Impacta desde lejos.',
        it: 'Blackwork ad alto contrasto con forme piene. Forte anche da lontano.',
      },
      date: '2025-12-20',
      styles: ['blackwork'],
      placement: 'upper-arm',
      colorMode: 'black',
      artistId: 'a002',
    },
    {
      id: 'g003',
      image: 'https://images.unsplash.com/photo-1541560052-5e137f229371?auto=format&fit=crop&w=1200&q=80',
      title: { en: 'Micro Realism', es: 'Micro Realismo', it: 'Micro Realismo' },
      description: {
        en: 'Small-scale realism with smooth gradients. Perfect for wrist/ankle.',
        es: 'Realismo pequeño con degradados suaves. Perfecto para muñeca/tobillo.',
        it: 'Realismo in piccolo formato con sfumature morbide. Perfetto per polso/caviglia.',
      },
      date: '2025-11-04',
      styles: ['realism'],
      placement: 'wrist',
      colorMode: 'black',
      artistId: 'a001',
    },
  ]