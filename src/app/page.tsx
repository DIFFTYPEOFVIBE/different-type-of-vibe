'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Download, Music2, CheckCircle2, ShoppingCart, Trash2, Tag, X, Gift } from 'lucide-react';

// ==========================================
// INLINE EXIT-INTENT MODAL COMPONENT
// ==========================================
function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasDismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-neutral-900 border border-purple-600/40 p-6 shadow-2xl text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
          <Gift className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          Before You Leave...
        </h3>
        <p className="text-neutral-300 text-sm mb-6">
          Take <span className="text-purple-400 font-semibold">10% OFF</span> your entire order today! Use promo code <span className="bg-neutral-800 px-2 py-1 rounded text-purple-300 font-mono text-xs border border-purple-700/50">VIBE10</span> at checkout.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleClose}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-xl transition-colors text-sm cursor-pointer"
          >
            Claim Discount
          </button>
          <button
            onClick={handleClose}
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// TYPES & TRACK DATA
// ==========================================
interface Track {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  priceMp3: number;
  priceWav: number;
  priceStems: number;
  audioUrl: string;
  linkMp3?: string;
  linkWav?: string;
  linkStems?: string;
}

interface CartItem {
  trackId: string;
  trackTitle: string;
  licenseType: 'MP3' | 'WAV' | 'STEMS';
  price: number;
  stripeLink?: string;
}

const MY_BEATS: Track[] = [
  {
    id: '1',
    title: 'Level Up - Travis Scott x Future Type Beat | Dark Trap Instrumental (92 BPM - F#m)',
    genre: 'Dark Trap',
    bpm: 92,
    key: 'F#m',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Level%20Up.mp3',
    linkMp3: 'https://buy.stripe.com/6oU5kCeC69ui92Jf4rcZa10',
    linkWav: 'https://buy.stripe.com/bJe6oG0LgeOC0wd7BZcZa0X',
    linkStems: 'https://buy.stripe.com/00wfZg8dIfSGen3cWjcZa0U',
  },
  {
    id: '2',
    title: 'Sip of Me - J. Cole x Joey Bada$$ Type Beat | Chill Lofi Boom Bap Instrumental (85 BPM - Dm)',
    genre: 'Chill Lofi Boom Bap',
    bpm: 85,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Sip%20of%20Me.mp3',
    linkMp3: 'https://buy.stripe.com/dRm6oG3Xs49Ya6N6xVcZa0Z',
    linkWav: 'https://buy.stripe.com/aFaaEW8dIbCq3Ip2hFcZa0W',
    linkStems: 'https://buy.stripe.com/dRmcN41Pk5e26UBbSfcZa0T',
  },
  {
    id: '3',
    title: 'Badin M 2 - Freddie Gibbs x MF DOOM Type Beat | Underground Boom Bap Instrumental (100 BPM - Am)',
    genre: 'Underground Boom Bap',
    bpm: 100,
    key: 'Am',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Badin%20M%202.mp3',
    linkMp3: 'https://buy.stripe.com/3cI7sK51wdKy5Qxf4rcZa0Y',
    linkWav: 'https://buy.stripe.com/cNi4gy51wgWK6UB9K7cZa0V',
    linkStems: 'https://buy.stripe.com/fZu7sK3XscGu2El2hFcZa0S',
  },
  {
    id: '4',
    title: 'City Lights - Joey Bada$$ x J. Cole Type Beat | Chill Boom Bap Instrumental (90 BPM - Dm)',
    genre: 'Chill Boom Bap',
    bpm: 90,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/City%20Lights.mp3',
    linkMp3: 'https://buy.stripe.com/dRmdR8eC621Qa6N7BZcZa0R',
    linkWav: 'https://buy.stripe.com/eVqdR81Pk35U1AhbSfcZa0Q',
    linkStems: 'https://buy.stripe.com/7sY7sKfGa49Ygvb2hFcZa0P',
  },
  {
    id: '5',
    title: 'Deep End - Future x Roddy Ricch Type Beat | Dark Melodic Trap Instrumental (130 BPM - B♭m)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'B♭m',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Deep%20End.mp3',
    linkMp3: 'https://buy.stripe.com/14A8wO0Lg9uien31dBcZa0O',
    linkWav: 'https://buy.stripe.com/3cI28qgKe6i6en3g8vcZa0N',
    linkStems: 'https://buy.stripe.com/7sY6oGalQ35Ua6Ne0ncZa0M',
  },
  {
    id: '6',
    title: 'Echoes - Drake x Future Type Beat | Dark Melodic Trap Instrumental (130 BPM - Dm)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Echoes.mp3',
    linkMp3: 'https://buy.stripe.com/14AdR865A49Y4Mt5tRcZa0L',
    linkWav: 'https://buy.stripe.com/5kQ8wO65A9uien32hFcZa0K',
    linkStems: 'https://buy.stripe.com/dRm9AS8dI0XMen3aObcZa0J',
  },
  {
    id: '7',
    title: 'Endgame - Metro Boomin x 21 Savage Type Beat | Dark Trap Boom Bap Instrumental (105 BPM - Fm)',
    genre: 'Dark Trap Boom Bap',
    bpm: 105,
    key: 'Fm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Endgame.mp3',
    linkMp3: 'https://buy.stripe.com/cNiaEW3XsdKy6UBaObcZa0I',
    linkWav: 'https://buy.stripe.com/aFa5kC9hMaym5QxcWjcZa0H',
    linkStems: 'https://buy.stripe.com/7sY14m2TodKy6UB3lJcZa0G',
  },
  {
    id: '8',
    title: 'High Life - Lil Tecca x Gunna Type Beat | Melodic Trap Instrumental (130 BPM - Dm)',
    genre: 'Melodic Trap',
    bpm: 130,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/High%20Life.mp3',
    linkMp3: 'https://buy.stripe.com/6oU4gy1Pk49YbaR5tRcZa0F',
    linkWav: 'https://buy.stripe.com/6oUfZgbpU7ma5Qx6xVcZa0E',
    linkStems: 'https://buy.stripe.com/5kQ5kC79E49YbaR8G3cZa0D',
  },
  {
    id: '9',
    title: 'Left On Read - Drake x Future Type Beat | Dark Melodic Trap Instrumental (130 BPM - F#m)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'F#m',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Left%20On%20Read.mp3',
    linkMp3: 'https://buy.stripe.com/7sYbJ0bpU9uiceVe0ncZa0C',
    linkWav: 'https://buy.stripe.com/3cI8wO3XsbCqfr77BZcZa0B',
    linkStems: 'https://buy.stripe.com/fZudR879EbCq1AhbSfcZa0A',
  },
  {
    id: '10',
    title: 'Lucid - Juice WRLD x Travis Scott Type Beat | Dark Melodic Trap Instrumental (130 BPM - B♭m)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'B♭m',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Lucid.mp3',
    linkMp3: 'https://buy.stripe.com/9B614m3XscGu5Qx4pNcZa0z',
    linkWav: 'https://buy.stripe.com/14AfZg79E6i61Ah8G3cZa0y',
    linkStems: 'https://buy.stripe.com/4gMeVc65AeOCdiZ4pNcZa0x',
  },
  {
    id: '11',
    title: 'Lullaby - Metro Boomin x Future Type Beat | Dark Melodic Trap Instrumental (130 BPM - F#m)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'F#m',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Lullaby.mp3',
    linkMp3: 'https://buy.stripe.com/14AaEWeC6dKy3Ipe0ncZa0w',
    linkWav: 'https://buy.stripe.com/28E28qgKedKybaRg8vcZa0v',
    linkStems: 'https://buy.stripe.com/9B6fZg51wfSG3Ip5tRcZa0u',
  },
  {
    id: '12',
    title: 'Mirage - Travis Scott x Future Type Beat | Dark Melodic Trap Instrumental (130 BPM - Dm)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Mirage.mp3',
    linkMp3: 'https://buy.stripe.com/00w6oG8dI5e2fr78G3cZa0t',
    linkWav: 'https://buy.stripe.com/6oU7sKgKe8qediZbSfcZa0s',
    linkStems: 'https://buy.stripe.com/6oU3cu2ToeOCfr7e0ncZa0r',
  },
  {
    id: '13',
    title: 'Obsession - Drake x Bryson Tiller Type Beat | Dark Melodic Trap Instrumental (130 BPM - Cm)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'Cm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Obsession.mp3',
    linkMp3: 'https://buy.stripe.com/aFa9AS2TodKybaRaObcZa0q',
    linkWav: 'https://buy.stripe.com/eVq6oG3Xs21Qgvb2hFcZa0p',
    linkStems: 'https://buy.stripe.com/5kQ3cudy26i67YF09xcZa0o',
  },
  {
    id: '14',
    title: 'Overcast - Future x Travis Scott Type Beat | Dark Melodic Trap Instrumental (130 BPM - Dm)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Overcast.mp3',
    linkMp3: 'https://buy.stripe.com/8x23cu3XsgWK92J09xcZa0n',
    linkWav: 'https://buy.stripe.com/fZu6oG8dI8qe6UB09xcZa0m',
    linkStems: 'https://buy.stripe.com/4gMcN42Toaym3Ip7BZcZa0l',
  },
  {
    id: '15',
    title: 'Overdrive - Playboi Carti x Lil Uzi Vert Type Beat | Dark Trap Instrumental (138 BPM - Dm)',
    genre: 'Dark Trap',
    bpm: 138,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Overdrive.mp3',
    linkMp3: 'https://buy.stripe.com/3cI4gy51w49Yfr78G3cZa0k',
    linkWav: 'https://buy.stripe.com/4gM5kCalQbCq5QxbSfcZa0j',
    linkStems: 'https://buy.stripe.com/5kQ6oG3Xs8qegvbcWjcZa0i',
  },
  {
    id: '16',
    title: 'Phantom - Future x Metro Boomin Type Beat | Dark Melodic Trap Instrumental (130 BPM - Dm)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'Dm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Phantom.mp3',
    linkMp3: 'https://buy.stripe.com/7sY4gy9hM0XM6UB09xcZa0h',
    linkWav: 'https://buy.stripe.com/7sYdR851w6i6a6N8G3cZa0g',
    linkStems: 'https://buy.stripe.com/eVq7sKctY6i65Qx8G3cZa0f',
  },
  {
    id: '17',
    title: 'Pressure - Lil Baby x NLE Choppa Type Beat | Dark Trap Instrumental (135 BPM - Fm)',
    genre: 'Dark Trap',
    bpm: 135,
    key: 'Fm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Pressure.mp3',
    linkMp3: 'https://buy.stripe.com/4gM7sK3Xs9ui3IpcWjcZa0e',
    linkWav: 'https://buy.stripe.com/aFadR8fGa49Y0wd7BZcZa0d',
    linkStems: 'https://buy.stripe.com/aFaeVcdy2eOCceV5tRcZa0c',
  },
  {
    id: '18',
    title: 'Shadows - Travis Scott x 21 Savage Type Beat | Dark Trap Instrumental (140 BPM - Cm)',
    genre: 'Dark Trap',
    bpm: 140,
    key: 'Cm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Shadows.mp3',
    linkMp3: 'https://buy.stripe.com/bJe00i65A0XM3Ip4pNcZa0b',
    linkWav: 'https://buy.stripe.com/7sY3cugKe8qe3Ip7BZcZa0a',
    linkStems: 'https://buy.stripe.com/14AfZg1Pk35Ua6NcWjcZa09',
  },
  {
    id: '19',
    title: 'Velvet - Post Malone x Jack Harlow Type Beat | Melodic Pop Trap Instrumental (120 BPM - A♭)',
    genre: 'Melodic Pop Trap',
    bpm: 120,
    key: 'A♭',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Velvet.mp3',
    linkMp3: 'https://buy.stripe.com/7sYeVc8dIcGu7YFf4rcZa08',
    linkWav: 'https://buy.stripe.com/6oU14m2To35UbaR09xcZa07',
    linkStems: 'https://buy.stripe.com/6oUdR88dI5e2gvb09xcZa06',
  },
  {
    id: '20',
    title: 'Viper - Metro Boomin x 21 Savage Type Beat | Dark Trap Instrumental (105 BPM - Fm)',
    genre: 'Dark Trap',
    bpm: 105,
    key: 'Fm',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Viper.mp3',
    linkMp3: 'https://buy.stripe.com/00wbJ0fGa0XM4MtaObcZa05',
    linkWav: 'https://buy.stripe.com/00wdR8gKegWK0wd3lJcZa04',
    linkStems: 'https://buy.stripe.com/9B66oG3Xs21QdiZ7BZcZa03',
  },
  {
    id: '21',
    title: 'Zone 6 - Future x Gunna Type Beat | Dark Melodic Trap Instrumental (130 BPM - B♭m)',
    genre: 'Dark Melodic Trap',
    bpm: 130,
    key: 'B♭m',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Zone%206.mp3',
    linkMp3: 'https://buy.stripe.com/bJe9AS65AdKy2El4pNcZa02',
    linkWav: 'https://buy.stripe.com/dRm14m9hM35Ugvb09xcZa01',
    linkStems: 'https://buy.stripe.com/6oUaEWfGabCqbaR6xVcZa00',
  },
];

// ==========================================
// MAIN STOREFRONT PAGE
// ==========================================
export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optInSuccess, setOptInSuccess] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Dynamic JSON-LD Schema markup for Google Rich Snippets
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Different Type of Vibe',
    url: 'https://differenttypeofvibe.com',
    genre: ['Hip-Hop', 'Trap', 'Boom Bap', 'Lofi'],
    track: MY_BEATS.map((track) => ({
      '@type': 'MusicRecording',
      name: track.title,
      genre: track.genre,
      audio: track.audioUrl,
      offers: [
        {
          '@type': 'Offer',
          name: 'MP3 Lease',
          price: track.priceMp3,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: track.linkMp3,
        },
        {
          '@type': 'Offer',
          name: 'WAV Lease',
          price: track.priceWav,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: track.linkWav,
        },
        {
          '@type': 'Offer',
          name: 'STEMS License',
          price: track.priceStems,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: track.linkStems,
        },
      ],
    })),
  };

  // Bulk Discounting Math Logic: Buy 2 Get 1 Free (Lowest priced item in cart becomes free)
  const calculateCartTotals = () => {
    if (cart.length === 0) return { subtotal: 0, discount: 0, total: 0 };

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;

    if (cart.length >= 3) {
      const lowestPrice = Math.min(...cart.map((item) => item.price));
      discount = lowestPrice;
    }

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      discount: parseFloat(discount.toFixed(2)),
      total: parseFloat((subtotal - discount).toFixed(2)),
    };
  };

  const addToCart = (track: Track, licenseType: 'MP3' | 'WAV' | 'STEMS', price: number, stripeLink?: string) => {
    const newItem: CartItem = {
      trackId: track.id,
      trackTitle: track.title,
      licenseType,
      price,
      stripeLink,
    };
    setCart((prev) => [...prev, newItem]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePlayPause = (track: Track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play();
      }
    }
  };

  const handleFreeOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/lldFXvWMNSAaPk368zJb/webhook-trigger/40336c67-48a7-40e7-8be7-b339a52fcce9',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            source: 'Different Type of Vibe - 3 Free Beats Opt-In',
            tags: ['Free Beats Lead', 'Website Opt-In'],
          }),
        }
      );

      setOptInSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('GHL Webhook Error:', error);
      setOptInSuccess(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { subtotal, discount, total } = calculateCartTotals();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col pb-32">
      {/* Inline Exit-Intent Popup Component */}
      <ExitIntentModal />

      {/* Google JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* Header Banner with Value Proposition */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Music2 className="w-7 h-7 text-purple-500" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Different Type of Vibe
            </span>
          </div>

          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/50 text-center">
            Buy Direct From The Producer • Zero Marketplace Fees • Instant Untagged Delivery
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 w-full mt-8 space-y-10">
        {/* FREE BEATS OPT-IN BANNER */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/60 via-purple-950 to-neutral-900 border border-purple-800/40 p-6 md:p-8 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-medium">
              <span>🔥 Exclusive Producer Pack</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Grab 3 Free Tagged Beats
            </h1>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Enter your email below to instantly receive 3 high-quality MP3 tagged beats straight to your inbox for demoing and writing.
            </p>

            {optInSuccess ? (
              <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Success! Check your inbox shortly for your 3 free beats download link.
                </span>
              </div>
            ) : (
              <form onSubmit={handleFreeOptIn} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-neutral-900/90 border border-neutral-700/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-neutral-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 hover:bg-purple-500 transition-colors text-white font-medium text-sm px-6 py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Claim Beats'}</span>
                  <Download className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* BULK DISCOUNT ANNOUNCEMENT BANNER */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-800/50 text-xs text-purple-300">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-purple-400" />
            <span><strong>AUTOMATIC BULK DEAL:</strong> Add 3 licenses to your cart to get 1 FREE automatically!</span>
          </div>
        </div>

        {/* FEATURED BEAT CATALOG */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Featured Tracks
            </h2>
            <span className="text-xs text-neutral-400 font-mono">
              {MY_BEATS.length} BEATS AVAILABLE
            </span>
          </div>

          <div className="space-y-3">
            {MY_BEATS.map((track) => {
              const isCurrent = currentTrack?.id === track.id;
              const isThisPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all ${
                    isCurrent
                      ? 'bg-purple-950/30 border-purple-700/60 shadow-md'
                      : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  {/* Track Info & Play Button */}
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <button
                      onClick={() => handlePlayPause(track)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer ${
                        isThisPlaying
                          ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                          : 'bg-neutral-800 text-neutral-200 hover:bg-purple-600 hover:text-white'
                      }`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    <div>
                      <h3 className="font-semibold text-white text-base leading-snug">
                        {track.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-xs text-neutral-400 mt-1">
                        <span>{track.genre}</span>
                        <span>•</span>
                        <span>{track.bpm} BPM</span>
                        <span>•</span>
                        <span>{track.key}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Action Buttons */}
                  <div className="flex items-center space-x-2 self-start sm:self-center">
                    <button
                      onClick={() => addToCart(track, 'MP3', track.priceMp3, track.linkMp3)}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-mono font-medium text-neutral-200 transition-colors cursor-pointer"
                    >
                      <span>MP3 ${track.priceMp3}</span>
                    </button>
                    <button
                      onClick={() => addToCart(track, 'WAV', track.priceWav, track.linkWav)}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-mono font-medium text-neutral-200 transition-colors cursor-pointer"
                    >
                      <span>WAV ${track.priceWav}</span>
                    </button>
                    <button
                      onClick={() => addToCart(track, 'STEMS', track.priceStems, track.linkStems)}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-900/70 border border-purple-700/50 text-xs font-mono font-medium text-purple-300 transition-colors cursor-pointer"
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      <span>STEMS ${track.priceStems}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CART SUMMARY DRAWER (Appears when items are in cart) */}
        {cart.length > 0 && (
          <section className="bg-neutral-900/90 border border-purple-800/50 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-purple-400" /> Your License Cart ({cart.length})
              </h3>
              {cart.length >= 3 && (
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-3 py-1 rounded-full font-medium">
                  🎉 Buy 2 Get 1 Free Applied!
                </span>
              )}
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-sm">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white line-clamp-1">{item.trackTitle}</span>
                    <span className="text-xs text-neutral-400">{item.licenseType} License</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-purple-300">${item.price.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(index)} className="text-neutral-500 hover:text-red-400 transition-colors cursor-pointer">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-4 space-y-1 text-sm font-mono">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Bulk Discount (1 Free):</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-neutral-800">
                <span>Total:</span>
                <span className="text-purple-400">${total.toFixed(2)}</span>
              </div>
            </div>

            <a
              href={cart[0]?.stripeLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl block text-center transition-colors text-sm"
            >
              Proceed to Instant Checkout (${total.toFixed(2)})
            </a>
          </section>
        )}
      </div>

      {/* PERSISTENT BOTTOM AUDIO PLAYER BAR */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 border-t border-neutral-800 p-4 backdrop-blur-md z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handlePlayPause(currentTrack)}
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>
              <div>
                <p className="font-semibold text-white text-sm line-clamp-1">
                  {currentTrack.title}
                </p>
                <p className="text-xs text-neutral-400">
                  {currentTrack.bpm} BPM • {currentTrack.key}
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <a
                href={currentTrack.linkMp3 || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
              >
                Buy License (${currentTrack.priceMp3})
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}