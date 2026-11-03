#!/usr/bin/env python3
import os
import sys
import time
import pandas as pd
import subprocess
import requests
from datetime import datetime
from dotenv import load_dotenv

# Force IPv4-only address resolution to bypass broken IPv6 network routes
import socket
_orig_getaddrinfo = socket.getaddrinfo
socket.getaddrinfo = lambda *args, **kwargs: [r for r in _orig_getaddrinfo(*args, **kwargs) if r[0] == socket.AF_INET]

# Base directories
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROCESSED_CSV_PATH = os.path.join(BASE_DIR, "processed_beats_metadata.csv")

# Load environment variables
load_dotenv(os.path.join(BASE_DIR, ".env"))
if not os.getenv("RESEND_API_KEY") and os.path.exists(r"C:\Users\Onzieb\beat-store-automation\.env"):
    load_dotenv(r"C:\Users\Onzieb\beat-store-automation\.env")
API_KEY = os.getenv("RESEND_API_KEY")

# Industry Blog Contacts Database
BLOG_CONTACTS = [
    {
        "id": "1",
        "name": "Bedroom Producers Blog (BPB)",
        "niche": "Freeware, Producer tech, Plugins, Software",
        "email": "contact@bedroomproducersblog.com",
        "url": "https://bedroomproducersblog.com/contact/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch the 'Next.js + Supabase Beat Store' case study. Fits their tech/productivity niche perfectly!"
    },
    {
        "id": "2",
        "name": "Producergrind",
        "niche": "Beatmakers, Hip-Hop producers, Marketing, Business",
        "email": "support@producergrind.com",
        "url": "https://producergrind.com/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch the 'automated background Reels daemon and email funnel' setup. Fits their focus on producer business!"
    },
    {
        "id": "3",
        "name": "Sound On Sound (SOS)",
        "niche": "Pro audio, Studio tech, Music engineering",
        "email": "editorial@soundonsound.com",
        "url": "https://www.soundonsound.com/information/contact-us",
        "pitch_type": "tech_stack",
        "strategy": "Pitch the technical integration of custom secure cloud storage, RLS-bypass tokens, and transaction-driven server delivery."
    },
    {
        "id": "4",
        "name": "MusicRadar",
        "niche": "Music technology, Tutorials, Software reviews",
        "email": "Direct Submission via Website",
        "url": "https://www.musicradar.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study pitch on building a high-speed, lightweight storefront to bypass major marketplace fees."
    },
    {
        "id": "5",
        "name": "SubmitHub (Playlist Curators)",
        "niche": "Spotify Playlists, Music blogs, YouTube curators",
        "email": "Direct Submission via Website",
        "url": "https://www.submithub.com/",
        "pitch_type": "music_only",
        "strategy": "Submit beat previews directly to hundreds of targeted playlist curators for placements."
    },
    {
        "id": "6",
        "name": "LANDR Blog",
        "niche": "Music production, Mastering, Distribution, Marketing",
        "email": "blog@landr.com",
        "url": "https://blog.landr.com/contact/",
        "pitch_type": "tech_stack",
        "strategy": "Case study of how you bypassed typical distributor player embeds by building a lightning-fast custom player and automated download pipeline."
    },
    {
        "id": "7",
        "name": "Splice Blog",
        "niche": "Samples, Producer tech, Tutorials, Artist features",
        "email": "Direct Submission via Website",
        "url": "https://splice.com/blog/contact-us/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch a production tutorial based on your drum arrangement style and your custom-looped Reels visualizer generator."
    },
    {
        "id": "8",
        "name": "Loopmasters Blog (Loop+)",
        "niche": "Loops, Beatmaking, DAW tutorials, Sample packs",
        "email": "Direct Submission via Website",
        "url": "https://www.loopmasters.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study on how independent beatmakers can organize catalog files, zip trackouts securely on Supabase, and build their own bio links page (links.html)."
    }
    ,
    {
        "id": "9",
        "name": "EDM.com",
        "niche": "Electronic music, Trap production, Artist features",
        "email": "submissions@edm.com",
        "url": "https://edm.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your hard-hitting trap beats or pitch a story on how you've merged next-gen web frameworks with independent trap music."
    },
    {
        "id": "10",
        "name": "Pitchfork",
        "niche": "Indie music, Hip-hop, Album reviews, News",
        "email": "Direct Submission via Website",
        "url": "https://pitchfork.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your highly stylized boom bap and trap instrumentals as a cohesive, concept-driven instrumental EP showcase."
    },
    {
        "id": "11",
        "name": "Earmilk",
        "niche": "Indie hip-hop, Electronic, Beat showcases, Reviews",
        "email": "Direct Submission via Website",
        "url": "https://earmilk.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your lofi and soulful boom bap instrumentals for their chill-beats playlist or independent producer features."
    },
    {
        "id": "12",
        "name": "Complex Music / Pigeons & Planes",
        "niche": "Underground hip-hop, Rising producers, Music discovery",
        "email": "pigeonsandplanes@complex.com",
        "url": "https://pigeonsandplanes.com/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch a profile feature on Onzieb as a rising music producer-coder who built their own storefront to retain 100% of master assets."
    },
    {
        "id": "13",
        "name": "Kreative (formerly DJBooth)",
        "niche": "Hip-hop essays, Producer business, Industry trends",
        "email": "editorial@djbooth.net",
        "url": "https://djbooth.net/",
        "pitch_type": "tech_stack",
        "strategy": "Business-case pitch on why the subscription-based VIP pass model ($19/mo) is the future of beat leasing over individual licensing."
    },
    {
        "id": "14",
        "name": "MusicTech Magazine",
        "niche": "DAWs, Software, Hardware, Studio tips, Technology",
        "email": "editor@musictech.com",
        "url": "https://musictech.com/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch the detailed technical case study of integrating your Vercel-hosted React frontend with secure Supabase storage buckets."
    },
    {
        "id": "15",
        "name": "The Recording Academy (Grammy Behind the Board)",
        "niche": "Pro audio, Producer business, Academy news",
        "email": "Direct Submission via Website",
        "url": "https://www.recordingacademy.com/",
        "pitch_type": "tech_stack",
        "strategy": "Professional story pitch on the evolution of independent beat licensing and the move toward coder-producer custom platforms."
    }
    ,
    {
        "id": "16",
        "name": "Attack Magazine",
        "niche": "Music technology, Electronic production, Synth tutorials, Business",
        "email": "editor@attackmagazine.com",
        "url": "https://www.attackmagazine.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study of how a hip-hop producer built a fast, lightweight custom player to bypass major storefront platform fees."
    },
    {
        "id": "17",
        "name": "Recording Magazine",
        "niche": "Home recording, Gear reviews, Tutorials, Engineering",
        "email": "Direct Submission via Website",
        "url": "https://recordingmag.com/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch the detailed technical integration of custom cloud storage and secure, trackout ZIP delivery."
    },
    {
        "id": "18",
        "name": "BandLab Blog",
        "niche": "Creator tools, Music distribution, Cloud DAWs, News",
        "email": "press@bandlab.com",
        "url": "https://blog.bandlab.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study on how a producer created a decentralized, direct storefront to complement their BandLab/Airbit social pipelines."
    },
    {
        "id": "19",
        "name": "Resident Advisor (RA)",
        "niche": "Electronic, Underground, Beat production, Reviews",
        "email": "editorial@residentadvisor.net",
        "url": "https://residentadvisor.net/",
        "pitch_type": "music_only",
        "strategy": "Submit your highly stylized, dark melodic instrumental EP showcase."
    },
    {
        "id": "20",
        "name": "HipHopDX",
        "niche": "Mainstream and underground hip-hop, Rising producers, Interviews",
        "email": "Direct Submission via Website",
        "url": "https://hiphopdx.com/",
        "pitch_type": "tech_stack",
        "strategy": "Profile pitch on Onzieb as a rising music producer-coder who built a custom web player to bypass traditional marketplace fees."
    },
    {
        "id": "21",
        "name": "XXL Magazine",
        "niche": "Hip-hop culture, Freshman class, New music, Producers",
        "email": "Direct Submission via Website",
        "url": "https://www.xxlmag.com/",
        "pitch_type": "tech_stack",
        "strategy": "Feature pitch on the business model of your $19/mo All-Access VIP Pass as a game-changer for independent recording artists' budgets."
    },
    {
        "id": "22",
        "name": "The Source",
        "niche": "Hip-hop culture, Independent releases, Rising artists, Beats",
        "email": "editorial@thesource.com",
        "url": "https://thesource.com/",
        "pitch_type": "tech_stack",
        "strategy": "Feature pitch on the 6-step email nurture campaign and custom automated CRM used to review incoming artist demos."
    },
    {
        "id": "23",
        "name": "HotNewHipHop (HNHH)",
        "niche": "Trending hip-hop, Mixtapes, Independent producers, Reviews",
        "email": "submissions@hotnewhiphop.com",
        "url": "https://www.hotnewhiphop.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your hard-hitting trap beats (like Overdrive or Deep End) for their indie instrumental features."
    },
    {
        "id": "24",
        "name": "Producer Spot",
        "niche": "Sample packs, DAW tutorials, Producer interviews",
        "email": "info@producerspot.com",
        "url": "https://www.producerspot.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study on building a custom bio links page (links.html) and automatic video Reel renders."
    },
    {
        "id": "25",
        "name": "SoundCloud Community Blog",
        "niche": "Independent artist growth, Streaming tips, Producer business",
        "email": "Direct Submission via Website",
        "url": "https://community.soundcloud.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study on how a producer leverages SoundCloud previews to drive traffic to a direct-sales Next.js web storefront."
    }
    ,
    {
        "id": "26",
        "name": "Music Connection Magazine",
        "niche": "Industry news, Reviews, Unsigned artist features, Producer listings",
        "email": "Direct Submission via Website",
        "url": "https://www.musicconnection.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study pitch of building a custom cloud-hosted beat storefront to bypass traditional transaction fees and marketplace lock-ins."
    },
    {
        "id": "27",
        "name": "Magnetic Magazine",
        "niche": "Electronic, Underground trap, Gear reviews, Artist features",
        "email": "info@magneticmag.com",
        "url": "https://www.magneticmag.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study of how you merged next-gen web frameworks (Next.js/Supabase) with independent trap music."
    },
    {
        "id": "28",
        "name": "Hip Hop Since 1987 (HHS1987)",
        "niche": "Urban, Hip-hop culture, Rising indie artists, Beat showcases",
        "email": "hiphopsince1987@gmail.com",
        "url": "https://hiphopsince1987.com/",
        "pitch_type": "tech_stack",
        "strategy": "Profile feature pitch on Onzieb as a producer-coder who created a custom web storefront to bypass traditional distributor fees."
    },
    {
        "id": "29",
        "name": "AllHipHop",
        "niche": "Mainstream and indie hip-hop, Album reviews, Producer spotlights",
        "email": "Direct Submission via Website",
        "url": "https://allhiphop.com/",
        "pitch_type": "tech_stack",
        "strategy": "Feature pitch on the business model of your $19/mo All-Access VIP Pass as a game-changer for indie artists' budgets."
    },
    {
        "id": "30",
        "name": "Urban Vault UK",
        "niche": "UK and US underground hip-hop, Lofi boom bap, Beatmakers",
        "email": "info@urbanvault.co.uk",
        "url": "https://urbanvault.co.uk/",
        "pitch_type": "music_only",
        "strategy": "Submit your lofi and soulful boom bap instrumentals (like Sip of Me or Legacy) for their chill-beats playlist or features."
    },
    {
        "id": "31",
        "name": "Rap-Up",
        "niche": "Trending hip-hop, Rising stars, Producers, Music showcases",
        "email": "Direct Submission via Website",
        "url": "https://www.rap-up.com/",
        "pitch_type": "tech_stack",
        "strategy": "Feature pitch on the 6-step email nurture campaign and custom automated CRM used to review incoming artist demos."
    },
    {
        "id": "32",
        "name": "The Hype Magazine",
        "niche": "Urban, Indie artist spotlights, Producer features, Lifestyle",
        "email": "editor@thehypemagazine.com",
        "url": "https://www.thehypemagazine.com/",
        "pitch_type": "tech_stack",
        "strategy": "Profile feature pitch on Onzieb as a producer-coder who built a custom web player to bypass traditional marketplace fees."
    },
    {
        "id": "33",
        "name": "Beatportal (by Beatport)",
        "niche": "Electronic music, Looppacks, DAW tech, Industry news",
        "email": "Direct Submission via Website",
        "url": "https://www.beatport.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study on building a custom bio links page (links.html) and automatic video Reel renders."
    },
    {
        "id": "34",
        "name": "Gearspace (formerly Gearslutz)",
        "niche": "Pro audio, Software, Hardware, Studio tips, Setups",
        "email": "Direct Submission via Website",
        "url": "https://gearspace.com/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch the detailed technical case study of integrating your Vercel-hosted React frontend with secure Supabase storage buckets."
    },
    {
        "id": "35",
        "name": "A&R Factory",
        "niche": "Independent music discovery, A&R scouts, Blog features, Playlists",
        "email": "info@anrfactory.com",
        "url": "https://www.anrfactory.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your highly stylized boom bap and trap instrumentals as a cohesive, concept-driven instrumental EP showcase."
    }
    ,
    {
        "id": "36",
        "name": "Unsigned Hyped",
        "niche": "Rising independent rap artists, producers, beat spotlights",
        "email": "Direct Submission via Website",
        "url": "https://www.unsignedhyped.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your latest instrumentals for review or feature your custom player."
    },
    {
        "id": "37",
        "name": "We Are Era",
        "niche": "Creator tools, video platforms, digital monetization, music marketing",
        "email": "Direct Submission via Website",
        "url": "https://weareera.com/",
        "pitch_type": "tech_stack",
        "strategy": "Case study pitch of building a custom cloud-hosted beat storefront to bypass traditional transaction fees and marketplace lock-ins."
    },
    {
        "id": "38",
        "name": "The Word Is Bond",
        "niche": "Underground hip hop, lofi beats, soulful boom bap, indie producer spotlights",
        "email": "Direct Submission via Website",
        "url": "https://www.thewordisbond.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your lofi and soulful boom bap instrumentals (like Sip of Me or Legacy) for their chill-beats playlist or features."
    },
    {
        "id": "39",
        "name": "Hip Hop Golden Age",
        "niche": "Golden era hip hop, boom bap, classic rap culture, boom bap producers",
        "email": "info@hiphopgoldenage.com",
        "url": "https://hiphopgoldenage.com/",
        "pitch_type": "music_only",
        "strategy": "Pitch your soulful boom bap instrumentals as a tribute to the golden era sound."
    },
    {
        "id": "40",
        "name": "Music Crowns",
        "niche": "Unsigned and independent artists, global music discovery, reviews, video showcases",
        "email": "submissions@musiccrowns.org",
        "url": "https://www.musiccrowns.org/",
        "pitch_type": "tech_stack",
        "strategy": "Profile feature pitch on Onzieb as a producer-coder who created a custom web storefront to bypass traditional distributor fees."
    },
    {
        "id": "41",
        "name": "One EDM",
        "niche": "Electronic music, future bass, trap beats, music tech, tutorials",
        "email": "Direct Submission via Website",
        "url": "https://oneedm.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your hard-hitting trap beats (like Overdrive or Deep End) for their indie instrumental features."
    },
    {
        "id": "42",
        "name": "Lyrical Lemonade",
        "niche": "Emerging hip-hop, music videos, music directors, rising producers",
        "email": "Direct Submission via Website",
        "url": "https://lyricallemonade.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your most creative melodic trap beats (like Lucid or Phantom) for their emerging production features."
    },
    {
        "id": "43",
        "name": "Sonicbids Blog",
        "niche": "Independent musicians, gig booking, gig guides, band marketing",
        "email": "Direct Submission via Website",
        "url": "https://blog.sonicbids.com/",
        "pitch_type": "tech_stack",
        "strategy": "Business-case pitch on why the subscription-based VIP pass model ($19/mo) is the future of beat leasing over individual licensing."
    },
    {
        "id": "44",
        "name": "Noisey (by VICE)",
        "niche": "Music culture, underground movements, alternative hip-hop, interviews",
        "email": "Direct Submission via Website",
        "url": "https://www.vice.com/en/section/music",
        "pitch_type": "tech_stack",
        "strategy": "Profile feature pitch on Onzieb as a producer-coder who built a custom web player to bypass traditional marketplace fees."
    },
    {
        "id": "45",
        "name": "Acrophobia (formerly Acro Beats)",
        "niche": "Chill lofi, boom bap, study beats, instrumental playlists",
        "email": "Direct Submission via Website",
        "url": "https://acrophobiabeats.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your chillest instrumental tracks for their study-beats and lofi playlists."
    }
    ,
    {
        "id": "46",
        "name": "The FADER",
        "niche": "Alternative music, underground hip-hop, rising producers, artist features",
        "email": "pitches@thefader.com",
        "url": "https://thefader.com/",
        "pitch_type": "tech_stack",
        "strategy": "Profile feature pitch on Onzieb as a producer-coder who created a custom web storefront to bypass traditional marketplace fees."
    },
    {
        "id": "47",
        "name": "Reverb Blog",
        "niche": "Music gear, instruments, studio setups, producer business, techniques",
        "email": "editor@reverb.com",
        "url": "https://reverb.com/news",
        "pitch_type": "tech_stack",
        "strategy": "Case study of how a producer integrated Vercel-hosted Next.js with secure, RLS-bypass cloud storage for instant stem deliveries."
    },
    {
        "id": "48",
        "name": "Beatstars World (Organic Competitor)",
        "niche": "Independent beat makers, storefront tutorials, licensing guides",
        "email": "Direct Submission via Website",
        "url": "https://beatstars.world/",
        "pitch_type": "tech_stack",
        "strategy": "Case study of why the subscription-based VIP pass model ($19/mo) is the future of beat leasing."
    },
    {
        "id": "49",
        "name": "Music Business Worldwide (MBW)",
        "niche": "Music industry news, tech, business models, executive profiles",
        "email": "Direct Submission via Website",
        "url": "https://www.musicbusinessworldwide.com/",
        "pitch_type": "tech_stack",
        "strategy": "Business-case pitch on why the direct-to-consumer (D2C) model is the ultimate path forward for independent beatmakers."
    },
    {
        "id": "50",
        "name": "Hip Hop Wired",
        "niche": "Urban, hip-hop culture, rising indie artists, beat showcases",
        "email": "Direct Submission via Website",
        "url": "https://hiphopwired.com/",
        "pitch_type": "tech_stack",
        "strategy": "Profile feature pitch on Onzieb as a producer-coder who built a custom web player to bypass traditional marketplace fees."
    },
    {
        "id": "51",
        "name": "Dancehall Arena",
        "niche": "Dancehall, afrobeat, urban instrumentals, playlists",
        "email": "Direct Submission via Website",
        "url": "https://www.dancehallarena.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your afrobeat/dancehall instrumentals for their playlist features or reviews."
    },
    {
        "id": "52",
        "name": "Solfeggio (formerly Soundplate Blog)",
        "niche": "Spotify playlist curation, indie artist marketing, music-tech",
        "email": "support@soundplate.com",
        "url": "https://soundplate.com/",
        "pitch_type": "tech_stack",
        "strategy": "Pitch how you automated your social video renders and background list cleaning."
    },
    {
        "id": "53",
        "name": "Underground Underdogs",
        "niche": "Underground rap, hyperpop, experimental beats, rising producers",
        "email": "Direct Submission via Website",
        "url": "https://undergroundunderdogs.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your most creative melodic trap beats (like Lucid or Phantom) for their emerging production features."
    },
    {
        "id": "54",
        "name": "Daily Beat",
        "niche": "Electronic music, future bass, trap beats, music tech, tutorials",
        "email": "Direct Submission via Website",
        "url": "https://daily-beat.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your hard-hitting trap beats (like Overdrive or Deep End) for their indie instrumental features."
    },
    {
        "id": "55",
        "name": "Okayplayer",
        "niche": "Soulful hip-hop, r&b, alternative rap, boom bap, reviews, interviews",
        "email": "Direct Submission via Website",
        "url": "https://okayplayer.com/",
        "pitch_type": "music_only",
        "strategy": "Submit your lofi and soulful boom bap instrumentals (like Sip of Me or Legacy) for features or reviews."
    }
]
def load_catalog():
    """Loads actual beats from the processed CSV database."""
    if not os.path.exists(PROCESSED_CSV_PATH):
        return []
    try:
        df = pd.read_csv(PROCESSED_CSV_PATH)
        beats = []
        for idx, row in df.iterrows():
            beats.append({
                "index": idx + 1,
                "title": row.get("Original Title", "Unknown Beat"),
                "genre": row.get("Genre", "Hip Hop"),
                "bpm": row.get("BPM", "120"),
                "key": row.get("Key", "Amin"),
                "seo_title": row.get("SEO Title", ""),
                "description": row.get("Description", "")
            })
        return beats
    except Exception as e:
        print(f"⚠️ Warning: Could not load catalog CSV: {e}")
        return []

def copy_to_clipboard(text):
    """Copies UTF-8 text to the Windows system clipboard using native PowerShell."""
    try:
        cmd = 'Set-Clipboard -Value @\'\n' + text + '\n\'@'
        subprocess.run(['powershell', '-NoProfile', '-Command', cmd], input=text.encode('utf-8'), check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return True
    except Exception:
        return False
def generate_tech_pitch(blog, beat):
    beat_name = beat["title"] if beat else "[Your Beat Name]"
    bpm = beat["bpm"] if beat else "120"
    key = beat["key"] if beat else "Amin"
    
    body = f"""Dear {blog['name']} Editorial Team,

My name is Onzieb, a music producer and web developer. I’ve been reading {blog['name']} for a long time, especially your articles on independent business workflows and custom studio tech setups.

I’m reaching out because I recently completed a technical milestone that I think your audience of independent producers and beat-makers would find incredibly valuable.

Frustrated by high marketplace transaction fees, sluggish load speeds, and poor Google SEO on standard beat players, I decided to build my own fully automated, cloud-hosted storefront from scratch using Next.js, Vercel, and Supabase Storage.

I’ve put together a self-healing background automation pipeline that does some pretty insane things on autopilot:
1. Automatically renders custom vertical visualizer Reels matching the beat's BPM and schedules them to social channels.
2. Direct, lightning-fast client-side downloads backed by un-guessable secure Supabase Storage CDN tokens.
3. Automatically repairs and cleans incoming email lists and deploys an advanced "Super-Schema" (comprising BeatStars, Airbit, Traktrain, and Soundee SEO specifications) directly into page headers.

The result is a storefront (https://differenttypeofvibe.com) that loads 4x faster than marketplace embeds, ranks organically on Google with rich gold star snippets, and runs entirely on autopilot for pennies a month.

I’ve drafted a detailed, step-by-step case study breakdown (detailing the Python backend, Next.js page structure, and the AWS/Supabase integration) that I would love to share with your audience as a guest post or feature interview, utilizing my latest instrumental "{beat_name}" ({bpm} BPM - {key}) as the live-use case.

I have attached a copy of the case study outline, and would love to hear if you are open to taking a look.

Thanks for your time and all the value you put out!

Best regards,

Onzieb
Founder, Different Type of Vibe
🌐 https://differenttypeofvibe.com
📧 music@mail.differenttypeofvibe.com"""
    return body

def generate_music_pitch(blog, beat):
    if not beat:
        print("❌ Error: You must select a beat from your catalog for a Music Pitch.")
        return ""
        
    clean_title = beat["title"].split(" - ")[0]
    bpm = beat["bpm"]
    key = beat["key"]
    genre = beat["genre"]
    seo_tags = beat["seo_title"] if beat["seo_title"] else f"{genre} Instrumental"
    
    # URL encoded slug
    slug = clean_title.lower().replace(" ", "-").replace("_", "-").replace("(", "").replace(")", "").strip()
    preview_url = f"https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/{clean_title.replace(' ', '%20')}.mp3"
    purchase_url = f"https://differenttypeofvibe.com/beat/{slug}"
    
    body = f"""Hey {blog['name']} Curators,

I hope you're doing well! 

I’ve been following your coverage on {blog['name']} and really respect your focus on high-quality independent music. 

I’m reaching out to share my latest instrumental release, "{clean_title}," which I think fits perfectly with the vibe of your playlist / upcoming features.

"{clean_title}" is a {genre} instrumental, set at {bpm} BPM in the key of {key}. I designed and mixed it specifically with the recording artist in mind—leaving distinct, dynamic space for vocals so melodic hooks cut through cleanly in the final mix.

You can listen to the high-fidelity preview stream directly on my secure CDN here:
🎧 {preview_url}

If you like the vibe and would like to license it or link it on your blog, the untagged storefront portal is located here:
🌐 {purchase_url}

I am actively promoting this release across my Instagram (@onzieb) and TikTok, and would be thrilled to tag and shout out your platform to my audience.

Thanks so much for your time and for continuing to champion independent creators!

Best regards,

Onzieb
Founder, Different Type of Vibe
🌐 https://differenttypeofvibe.com
📧 music@mail.differenttypeofvibe.com"""
    return body
def send_outreach_email(to_email, subject, body):
    """Sends the outreach email directly using Resend's API in a clean, professional HTML layout."""
    api_key = os.getenv("RESEND_API_KEY") or API_KEY
    from_email = os.getenv("RESEND_FROM_EMAIL") or "Onzieb <music@mail.differenttypeofvibe.com>"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
    
    # We wrap the text in a beautifully padded email layout
    html_content = f"""
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 15px; color: #2d3748; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="white-space: pre-wrap;">{body}</div>
    </div>
    """
    
    payload = {
        "from": from_email,
        "to": [to_email],
        "subject": subject,
        "html": html_content
    }
    try:
        res = requests.post("https://api.resend.com/emails", headers=headers, json=payload, timeout=10)
        if res.status_code in [200, 201]:
            return True, res.json().get("id")
        return False, res.text
    except Exception as e:
        return False, str(e)

def auto_outreach_cycle(max_pitches_per_run=2):
    """Automated non-interactive outreach cycle for GitHub Actions & background automation."""
    import random, json
    print("======================================================================")
    print("         ONZIEB AUTOMATION - AUTOMATED BLOG & PRESS OUTREACH")
    print("======================================================================\n")

    state_file = os.path.join(BASE_DIR, "scripts", "blog_outreach_state.json")
    state = {}
    if os.path.exists(state_file):
        try:
            with open(state_file, "r", encoding="utf-8") as f:
                state = json.load(f)
        except Exception:
            state = {}

    beats = load_catalog()
    email_contacts = [b for b in BLOG_CONTACTS if "@" in b.get("email", "")]
    
    print(f"📡 Found {len(email_contacts)} emailable press & blog contacts.")

    # Filter out contacts pitched in last 7 days
    now = datetime.now()
    eligible_contacts = []
    for c in email_contacts:
        last_sent = state.get(c["id"], {}).get("last_sent")
        if last_sent:
            try:
                last_dt = datetime.fromisoformat(last_sent)
                if (now - last_dt).days < 7:
                    continue
            except Exception:
                pass
        eligible_contacts.append(c)

    print(f"🎯 {len(eligible_contacts)} contacts eligible for outreach cycle (Cooldown: 7 days).")

    if not eligible_contacts:
        print("💤 All contacts are on 7-day cooldown. Outreach cycle complete.")
        return

    selected_contacts = random.sample(eligible_contacts, min(max_pitches_per_run, len(eligible_contacts)))

    for blog in selected_contacts:
        selected_beat = random.choice(beats) if beats else None
        
        if blog["pitch_type"] == "tech_stack":
            pitch_email = generate_tech_pitch(blog, selected_beat)
            subject_line = "Case Study Pitch: How I Built a Self-Healing Next.js & Supabase Beat Store to Bypass Marketplace Fees"
        else:
            if not selected_beat:
                print(f"⚠️ Skipping music pitch for {blog['name']} (no beats found in catalog).")
                continue
            pitch_email = generate_music_pitch(blog, selected_beat)
            subject_line = f"Feature Submission: New Organic Vibe from Producer Onzieb — '{selected_beat['title'].split(' - ')[0]}'"

        print(f"📧 Sending pitch to: {blog['name']} ({blog['email']})...")
        success, response_text = send_outreach_email(blog["email"], subject_line, pitch_email)
        
        if success:
            print(f"   [✓] SUCCESS! Pitch delivered to {blog['name']} [ID: {response_text}]")
            state[blog["id"]] = {
                "name": blog["name"],
                "email": blog["email"],
                "last_sent": now.isoformat(),
                "resend_id": response_text
            }
        else:
            print(f"   [!] Resend Error for {blog['name']}: {response_text}")
        
        time.sleep(1)

    os.makedirs(os.path.dirname(state_file), exist_ok=True)
    with open(state_file, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)

    print("\n✨ Automated Blog Outreach Cycle Completed Successfully!")

def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--auto", action="store_true", help="Run in automated non-interactive cloud mode")
    args = parser.parse_args()

    if args.auto or os.getenv("CI") or os.getenv("GITHUB_ACTIONS"):
        auto_outreach_cycle()
        return

    print("======================================================================")
    print("         ONZIEB AUTOMATION - INTERACTIVE BLOG OUTREACH MANAGER")
    print("======================================================================\n")

    # 1. Load Catalog
    beats = load_catalog()
    if not beats:
        print("⚠️ Warning: processed_beats_metadata.csv is empty or missing. Please run processing first.")
        print("   (Proceeding with generic beat placeholders...)")

    while True:
        print("🎯 SELECT A TARGET BLOG TO PITCH TO:")
        for blog in BLOG_CONTACTS:
            print(f"  {blog['id']}. {blog['name']} | Niche: {blog['niche']}")
        print("  46. Exit Outreach Manager")
        
        choice = input("\nChoose an option (1-46): ").strip()
        if choice == "46":
            print("\n👋 Exiting Blog Outreach Manager! Good luck with your pitches! 🚀\n")
            break
            
        selected_blog = next((b for b in BLOG_CONTACTS if b["id"] == choice), None)
        if not selected_blog:
            print("❌ Invalid option. Please choose 1-46.")
            continue

        print(f"\n📢 Selected Target: {selected_blog['name']}")
        print(f"   ├─ Niche focus:      {selected_blog['niche']}")
        print(f"   ├─ Contact Email:     {selected_blog['email']}")
        print(f"   ├─ Submission URL:    {selected_blog['url']}")
        print(f"   └─ Recommended Strategy: {selected_blog['strategy']}")

        # 2. Select a Beat
        selected_beat = None
        if beats:
            print(f"\n🎵 SELECT A BEAT FROM YOUR CATALOG:")
            print("  0. Use generic beat placeholders")
            # Display all available beats in your catalogue
            for b in beats:
                print(f"  {b['index']}. {b['title']} ({b['bpm']} BPM - {b['key']})")
            
            beat_choice = input(f"\nSelect a beat (0-{len(beats)}): ").strip()
            if beat_choice != "0":
                selected_beat = next((b for b in beats if str(b["index"]) == beat_choice), None)
                if selected_beat:
                    print(f"   [✓] Selected Beat: {selected_beat['title']}")

        # 3. Generate the Email Body
        pitch_email = ""
        subject_line = ""
        if selected_blog["pitch_type"] == "tech_stack":
            pitch_email = generate_tech_pitch(selected_blog, selected_beat)
            subject_line = f"Case Study Pitch: How I Built a Self-Healing Next.js & Supabase Beat Store to Bypass Marketplace Fees"
        else:
            if not selected_beat:
                print("❌ Error: A music pitch requires selecting a real beat. Skipping generation.")
                continue
            pitch_email = generate_music_pitch(selected_blog, selected_beat)
            subject_line = f"Feature Submission: New Organic Vibe from Producer Onzieb — '{selected_beat['title'].split(' - ')[0]}'"

        # 4. Display and Copy Options
        print("\n" + "="*80)
        print(f"👉 GENERATED EMAIL PITCH FOR {selected_blog['name'].upper()}")
        print(f"📧 Destination Email:  {selected_blog['email']}")
        print(f"🏷️ Recommended Subject: {subject_line}")
        print("="*80)
        print(pitch_email)
        print("="*80 + "\n")

        # Ask to send automatically
        sent_successfully = False
        if selected_blog["email"] != "Direct Submission via Website":
            send_now = input("🚀 Do you want to automatically send this email right now via your Resend API? (y/N): ").strip().lower()
            if send_now == "y":
                print("   ⏳ Contacting Resend to deliver your pitch...")
                success, response_text = send_outreach_email(selected_blog["email"], subject_line, pitch_email)
                if success:
                    print(f"   [✓] SUCCESS! Your pitch email has been delivered to {selected_blog['name']}! [ID: {response_text}]")
                    sent_successfully = True
                else:
                    print(f"   [❌] Failed to send automatically: {response_text}")
                    print("   [i] This usually happens if your Resend daily free quota is exceeded.")
        
        # Fallback to clipboard if not sent automatically
        if not sent_successfully:
            print("\n📋 Copying generated pitch to your system clipboard...")
            copied = copy_to_clipboard(f"Subject: {subject_line}\n\n{pitch_email}")
            if copied:
                print("   [✓] Success! The complete pitch is copied to your clipboard. Paste it directly in your email client (Gmail/Outlook)!")
            else:
                print("   [⚠️] Warning: Could not access Windows clipboard. Please manually select and copy the text above.")

        input("\nPress Enter to return to the main menu...")
        print("\n" + "-"*80 + "\n")

if __name__ == "__main__":
    main()