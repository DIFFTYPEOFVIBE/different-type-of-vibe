import os
import sys
import json
import requests
import time
from datetime import datetime, timezone

from dotenv import load_dotenv

# Base directories
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE_FILE = os.path.join(BASE_DIR, "scripts", "nurture_state.json")

# Load environment variables
load_dotenv(os.path.join(BASE_DIR, ".env"))

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_AUDIENCE_ID = os.getenv("RESEND_AUDIENCE_ID")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <beats@differenttypeofvibe.com>")
STRIPE_VIP_MEMBERSHIP_LINK = os.getenv("STRIPE_VIP_MEMBERSHIP_LINK", "https://differenttypeofvibe.com")

# Define placeholders for the 3-Step HTML Nurture Sequence
NURTURE_SEQUENCE = [
    {
        "delay_days": 0,
        "subject": "🎁 Your 3 Free Beats are ready! (+ 30% Off Code Inside)",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>Thanks for locking in! Your free beat pack is officially ready for download.</p>
                <p>I packed three of my favorite tagged instrumentals into this starter pack so you can write and lay down your initial demos right away.</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Your_3_Free_Tagged_Beats.zip" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🎁 Download Your 3 Free Beats (.ZIP)</a>
                    <p style="margin-top: 12px; font-size: 13px;"><a href="https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Your_3_Free_Tagged_Beats.zip" style="color: #c084fc; text-decoration: underline;">📲 Mobile / Unzipped Direct Access</a></p>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px;">🎧 <strong>Ready to release on Spotify/Apple Music?</strong></p>
                <p>If you record a hit and want to upload it to streaming services or monetize it, you'll need an untagged license.</p>
                <p>To help you get started on your release, here is a special welcome discount code for <strong>30% off</strong> any license today:</p>
                
                <div style="background-color: #1e133e; border: 1px dashed #7c3aed; padding: 15px; border-radius: 6px; text-align: center; font-size: 20px; font-weight: bold; color: #c084fc; margin: 20px 0;">
                    Code: WELCOME30
                </div>

                <!-- $9.99 VIP Pass Banner -->
                <div style="background: linear-gradient(135deg, #180d38 0%, #291252 100%); border: 1px solid #a855f7; border-radius: 8px; padding: 18px; margin: 25px 0; text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #e9d5ff; font-weight: bold; font-size: 16px;">🔥 PREFER UNTAGGED WAV DOWNLOADS EVERY MONTH?</p>
                    <p style="margin: 0 0 12px 0; color: #c084fc; font-size: 14px;">Unlock <strong>5 Untagged Commercial WAV Leases</strong> every month for just <strong>$9.99/mo</strong> (or local Mobile Money)!</p>
                    <a href="https://www.differenttypeofvibe.com/deals" style="background-color: #a855f7; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 5px; font-weight: bold; font-size: 14px; display: inline-block;">Get the $9.99 VIP Pass</a>
                </div>
                
                <p style="text-align: center; font-size: 14px; color: #a78bfa;">Use this code at checkout on <a href="https://differenttypeofvibe.com" style="color: #c084fc; text-decoration: none; font-weight: bold;">differenttypeofvibe.com</a></p>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px; font-size: 14px; color: #a78bfa; font-style: italic;">
                    <strong>PS:</strong> If this email landed in your Promotions or Spam folder, please drag it to your Primary Inbox so you don't miss the upcoming production guides and special vouchers I'll be sending you this week! 💜
                </p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
                <p>If you wish to opt-out, you can unsubscribe at any time.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 1,
        "subject": "⏳ 24 Hours Left: Your 30% Welcome Discount (Code: WELCOME30)",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>Quick heads-up! I wanted to make sure you didn't miss out on your welcome gift.</p>
                <p>Your <strong>30% OFF</strong> welcome discount code is active for <strong>24 hours only</strong> across all license tiers on the store (MP3, 24-Bit WAV, and Tracked-Out STEMS).</p>
                
                <div style="background-color: #1e133e; border: 1px dashed #7c3aed; padding: 18px; border-radius: 8px; text-align: center; margin: 25px 0;">
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #a78bfa; text-transform: uppercase; letter-spacing: 1px;">Your Exclusive Promo Code</p>
                    <span style="font-size: 24px; font-weight: bold; color: #c084fc; letter-spacing: 2px;">WELCOME30</span>
                </div>

                <p>If you've been listening to the free beat pack and have a demo ready to record, locking in your uncompressed 24-Bit WAV or STEMS lease today gets you full commercial clearance for Spotify, Apple Music, and YouTube monetization.</p>

                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🔥 Claim 30% Off Your License Now</a>
                </div>

                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px; font-size: 14px; color: #f43f5e; text-align: center;">
                    ⚠️ Note: Once the 24-hour timer expires, this code will automatically deactivate.
                </p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 2,
        "subject": "Behind the sound: How I produced these tracks 🎹",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>I wanted to follow up and share a quick look behind the screen on how I made some of the tracks in your free pack.</p>
                <p>When I cooked up the drum bounce for <strong>'Level Up'</strong>, I specifically designed it with dynamic space for vocals so melodic hooks cut through clean. I always mix my beats with the artist in mind—leaving room for your story to be heard.</p>
                
                <p>Check out the full arrangement and see what other vibes are currently trending in the catalog:</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🎹 Browse the Instrumental Catalog</a>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px;">💬 <strong>Let's connect!</strong></p>
                <p>Just hit reply to this email and let me know which of the 3 free beats fits your vocal style best. I respond to all my emails personally!</p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 3,
        "subject": "How to arrange your vocals like a pro 🎙️",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>One of the biggest differences between a bedroom demo and a professional stream-ready hit is <strong>vocal arrangement</strong>.</p>
                <p>Many artists make the mistake of recording their vocals straight through without dynamic contrast. If your chorus sounds exactly like your verse, the listener's brain gets bored.</p>
                
                <p>Here are 3 quick arrangement secrets you can use in your next studio session:</p>
                <ul style="padding-left: 20px; margin: 15px 0; color: #d8b4fe;">
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">1. Stack and Pan Your Hooks</strong>: Record your main hook vocal right down the center. Then, record two exact copies (doubles), and pan one 100% Left and one 100% Right. This instantly makes your chorus sound "huge" and wide.</li>
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">2. Use Ad-libs for Momentum</strong>: Keep your verses clean and dry, but scatter ad-libs, echoes, or background harmonies in the "empty pockets" between your main lyric lines to keep the momentum moving.</li>
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">3. Clean the Mud</strong>: Use a High-Pass filter on your vocals to cut out everything below 80Hz–100Hz. This removes low-end rumble and lets the bass and 808 of the beat breathe cleanly.</li>
                </ul>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px;">🎹 <strong>Every track in my catalog is built for this.</strong></p>
                <p>I arrange my beats with distinct structural transitions (Intro, Verse, Pre-Hook, Hook) so your vocal arrangements naturally lock in and sound like a major label release.</p>
                <p>Browse the store today and listen to how the energy shifts between sections:</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🎧 Explore Organized Beats</a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 5,
        "subject": "Exclusive Promo: Buy 1 Beat, Get 1 Free (48 Hours Only 🎟)",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>I'm unlocking a special private promo for artists who are actively in the studio working on new projects this month.</p>
                <p>For the next 48 hours, I'm offering a <strong>Buy 1 Beat, Get 1 Free</strong> deal across my entire catalog.</p>
                <p>This deal applies to all license tiers—just add any two beats of the same license tier to your cart, and the discount is automatically applied at checkout.</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4); display: inline-block;">🔥 Activate Buy 1 Get 1 Free</a>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px; text-align: center; font-size: 14px; color: #f43f5e;">⚠️ This special deal expires in exactly 48 hours. Grab your track licenses before the vault closes!</p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 6,
        "subject": "Re: BOGO [Expires Tonight ⏳]",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>I'll keep this super short because I know you're busy in the studio.</p>
                <p>This is a quick heads-up that your private **Buy 1 Beat, Get 1 Free (BOGO)** discount across my entire catalog expires in just a few hours.</p>
                <p>If you have any drafts or recording sessions scheduled for this month, locking in your uncompressed, high-quality licenses right now is the best way to secure your rights and prep for release.</p>
                
                <p style="font-size: 18px; text-align: center; font-weight: bold; color: #c084fc; margin: 25px 0;">🎁 Add any 2 beats of the same license tier to your cart, and 1 will be completely free! (Applied automatically)</p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4); display: inline-block;">⏳ Claim Your Free Beat Now</a>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px; text-align: center; font-size: 14px; color: #f43f5e;">⚠️ The vault closes tonight. Once the timer hits zero, the coupon will automatically deactivate.</p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 7,
        "subject": "🚨 Stop buying leases individually (Save 95% on MP3/WAV/STEMS)",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>I saw that your 48-hour BOGO discount code expired. If you missed out on securing your track leases, don't worry!</p>
                <p>I put together an even better, more sustainable option for active independent artists who are consistently in the studio writing, collaborating, and dropping singles.</p>
                <p>Instead of paying $49–$149 for a single WAV or stems lease every time you want to record, you can now join the <strong>VIP Artist Pass</strong> on <a href="https://differenttypeofvibe.com" style="color: #c084fc; text-decoration: none;">differenttypeofvibe.com</a>.</p>
                <p>For just <strong>$9.99/month</strong>, you get <strong>5 Untagged WAV Commercial Beat Leases every month</strong> (a $250+ value for just $9.99). That's a massive savings on your studio budget!</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); display: inline-block;">🎟️ Start $9.99/mo VIP Artist Pass</a>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px;">🛡️ <strong>The VIP Pass Guarantee:</strong></p>
                <ul style="padding-left: 20px; margin: 15px 0;">
                    <li style="margin-bottom: 10px;"><strong>5 WAV Commercial Leases/mo</strong>: 100% untagged audio files ready for Spotify & Apple Music.</li>
                    <li style="margin-bottom: 10px;"><strong>Keep Licenses Forever</strong>: Any song released during your subscription remains fully licensed in perpetuity (forever).</li>
                    <li style="margin-bottom: 10px;"><strong>Zero Commitment</strong>: No contracts or hidden fees—cancel anytime in 1 click.</li>
                </ul>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 10,
        "subject": "🎚️ Vocal Mixing Blueprint: Make your vocals sit perfectly in the mix",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>Ever recorded a great vocal take, but felt like it sounded "on top" of the beat instead of glued smoothly inside it?</p>
                <p>Here is my quick 3-step <strong>Vocal Mixing Blueprint</strong> to make lead vocals sit seamlessly over instrumentals:</p>
                
                <ul style="padding-left: 20px; margin: 20px 0; color: #d8b4fe;">
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">1. Carve Frequency Space (EQ)</strong>: Dip 1.5 dB to 2 dB around 1 kHz–3 kHz on the beat if your vocal feels buried. This opens up the exact frequency pocket human ears use for vocal clarity.</li>
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">2. Serial Compression</strong>: Instead of using one heavy compressor, use two lighter compressors. Use a fast optical compressor first for peak control (2-3 dB reduction), followed by a VCA or FET compressor for tone and presence.</li>
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">3. Shared Reverb Bus</strong>: Send both your lead vocal and beat sub-mix to a subtle plate reverb bus. This trick simulates both elements being recorded in the same acoustic space.</li>
                </ul>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px;">🎧 <strong>Built for Vocal Clarity:</strong></p>
                <p>All instrumentals in my catalog are pre-mixed with headroom and carved frequency pockets so your vocals lock in instantly without fighting heavy bass or harsh mids.</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🎚️ Test Your Vocals on New Beats</a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 14,
        "subject": "📜 Spotify & Apple Music Clearance Guide (Avoid Copyright Strikes)",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>Before you upload your next single to DistroKid, TuneCore, or CD Baby, make sure your legal rights and licenses are 100% covered!</p>
                <p>Here is what every independent artist needs to know before publishing songs to streaming services:</p>
                
                <ul style="padding-left: 20px; margin: 20px 0; color: #d8b4fe;">
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">1. Free Tagged Beats vs Untagged Leases</strong>: Free tagged downloads are strictly for personal listening and writing practice. Uploading tagged or unlicensed audio to Spotify can lead to strikes or track takedowns.</li>
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">2. MP3 vs WAV vs STEMS</strong>: Major digital stores require uncompressed 24-bit WAV files or STEMS for proper mastering and distribution.</li>
                    <li style="margin-bottom: 12px;"><strong style="color: #f1ecff;">3. Clear Contracts</strong>: Every license purchased on <a href="https://differenttypeofvibe.com" style="color: #c084fc; font-weight: bold;">differenttypeofvibe.com</a> comes with instant automated legal agreements granting you official distribution rights.</li>
                </ul>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); display: inline-block;">📜 Secure Your Official Track License</a>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px; text-align: center; font-size: 14px; color: #a78bfa;">Protect your music rights and keep 100% of your artist royalties!</p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 20,
        "subject": "🌟 VIP Member Spotlight: Get 25% Off VIP All-Access Membership",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>If you're dropping music consistently, buying individual beat licenses every time you record adds up fast.</p>
                <p>That's why I launched the <strong>Onzieb All-Access VIP Pass</strong>—giving serious independent artists complete access to MP3, WAV, and multitrack STEMS for <strong>3 beats every month</strong> for just <strong>$19/month</strong>.</p>
                
                <div style="background-color: #1e133e; border: 1px dashed #7c3aed; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <p style="margin: 0 0 10px 0; color: #c084fc; font-weight: bold; font-size: 18px; text-align: center;">🎟️ Special VIP Offer inside</p>
                    <p style="margin: 0; font-size: 15px; text-align: center; color: #f1ecff;">Use coupon code <strong style="color: #38bdf8; font-size: 18px;">VIP25</strong> at checkout to get <strong>25% OFF</strong> your first month of VIP membership!</p>
                </div>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="{vip_link}" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🎟️ Claim 25% Off VIP Pass</a>
                </div>
                
                <ul style="padding-left: 20px; margin: 15px 0; font-size: 14px; color: #a78bfa;">
                    <li>Keep all downloaded track licenses forever even if you cancel.</li>
                    <li>Full MP3 + WAV + Multitrack STEMS for professional mixing.</li>
                    <li>No long-term contracts. Cancel with one click anytime.</li>
                </ul>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 28,
        "subject": "🎧 New Catalog Beats Dropped + Studio Vocal Warmup Guide",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>I just uploaded fresh production drops to the storefront, including new Hip-Hop, Lo-Fi, and atmospheric Trap instrumentals!</p>
                <p>Whether you're writing a late-night melodic single or an energetic anthem, I've got new vibes waiting for you in the catalog.</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4); display: inline-block;">🎧 Listen to New Catalog Drops</a>
                </div>
                
                <p style="border-top: 1px solid #1f1440; padding-top: 20px; margin-top: 20px;">💬 <strong>What beat style do you want next?</strong></p>
                <p>Reply directly to this email and tell me what BPM, Key, or artist style beat you want me to cook up next in the studio!</p>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    },
    {
        "delay_days": 35,
        "subject": "🎙️ Demo Spotlight: Send me your tracks recorded on Onzieb beats!",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey {artist_name},</p>
                <p>I'm always looking for talented artists who are recording hits over my beats to highlight across my platforms!</p>
                <p>If you've recorded a song or demo on any of my instrumentals, I want to hear it.</p>
                
                <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <p style="margin: 0 0 10px 0; color: #c084fc; font-weight: bold; font-size: 18px; text-align: center;">🔥 Send In Your Demos for Feature Consideration</p>
                    <p style="margin: 0; font-size: 15px; text-align: center; color: #f1ecff;">Hit reply to this email with a link to your track (SoundCloud, Spotify, Dropbox, MP3, etc.). I personally listen to every submission and offer feedback + playlist spotlight opportunities for standout tracks!</p>
                </div>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); display: inline-block;">🎹 Explore Full Beat Catalog</a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
                <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
            </div>
        </div>
        """
    }
]


def load_nurture_state():
    """Loads the email nurture progress state."""
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"⚠️ Warning: Failed to load nurture state file: {e}")
    return {}

def save_nurture_state(state):
    """Saves the email nurture progress state."""
    try:
        os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
        with open(STATE_FILE, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2)
    except Exception as e:
        print(f"❌ Failed to save nurture state: {e}")

def get_resend_headers():
    """Returns headers for direct Resend API calls."""
    return {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json"
    }

def fetch_active_audience_id():
    """Queries Resend to fetch the first available audience ID if not configured."""
    headers = get_resend_headers()
    try:
        res = requests.get("https://api.resend.com/audiences", headers=headers)
        if res.status_code == 200:
            audiences = res.json().get("data", [])
            if audiences:
                aud_id = audiences[0]["id"]
                aud_name = audiences[0]["name"]
                print(f"📡 Resend Audiences: Detected '{aud_name}' [ID: {aud_id}]")
                return aud_id
        print(f"❌ Could not retrieve Audiences from Resend: {res.text}")
    except Exception as e:
        print(f"❌ Error contacting Resend Audiences API: {e}")
    return None

def fetch_audience_contacts(audience_id):
    """Fetches all subscribed contacts in the specified audience from Resend."""
    headers = get_resend_headers()
    try:
        url = f"https://api.resend.com/audiences/{audience_id}/contacts"
        res = requests.get(url, headers=headers)
        if res.status_code == 200:
            return res.json().get("data", [])
        else:
            print(f"❌ Could not retrieve Contacts for Audience {audience_id}: {res.text}")
    except Exception as e:
        print(f"❌ Error contacting Resend Contacts API: {e}")
    return []

def send_resend_email(to_email, subject, html_content):
    """Sends an email using Resend API (pure requests, zero dependencies)."""
    headers = get_resend_headers()
    payload = {
        "from": RESEND_FROM_EMAIL,
        "to": [to_email],
        "subject": subject,
        "html": html_content
    }
    try:
        res = requests.post("https://api.resend.com/emails", headers=headers, json=payload)
        if res.status_code in [200, 201]:
            email_id = res.json().get("id")
            print(f"✅ Email successfully sent to {to_email}! [Email ID: {email_id}]")
            return True
        else:
            print(f"❌ Resend Email Send Failed for {to_email}: {res.text}")
            return False
    except Exception as e:
        print(f"❌ Exception sending Resend email: {e}")
        return False

def is_in_checkout_recovery_cooldown(email):
    """Checks if a subscriber has an active interrupted checkout in the last 24 hours."""
    try:
        import stripe
        stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
        if not stripe.api_key:
            return False
        
        sessions = stripe.checkout.Session.list(limit=50)
        now_ts = time.time()
        for s in sessions.data:
            c_email = s.customer_details.email if s.customer_details else s.customer_email
            if c_email and c_email.strip().lower() == email.strip().lower():
                # If checkout created within last 24 hours (86,400 seconds)
                if (now_ts - s.created) < 86400:
                    return True
    except Exception:
        pass
    return False

def run_nurture_campaign():
    """Main execution block to check contacts and deliver scheduled nurture emails."""
    print("======================================================================")
    print("             ONZIEB AUTOMATION - RESEND EMAIL NURTURE CAMPAIGN")
    print("======================================================================")
    
    if not RESEND_API_KEY:
        print("❌ Error: RESEND_API_KEY not found in environment. Skipping email run.")
        return

    # 1. Determine active Audience ID
    audience_id = RESEND_AUDIENCE_ID
    if not audience_id:
        print("🔍 RESEND_AUDIENCE_ID not specified in environment. Searching audiences...")
        audience_id = fetch_active_audience_id()
        
    if not audience_id:
        print("❌ Error: No active Resend Audience ID found. Skipping nurture run.")
        return

    # 2. Fetch contacts
    contacts = fetch_audience_contacts(audience_id)
    if not contacts:
        print("ℹ️ No contacts found in your Resend Audience.")
        return

    print(f"👥 Found {len(contacts)} total contact(s) in Audience.")

    # 3. Load tracking state
    nurture_state = load_nurture_state()
    now_utc = datetime.now(timezone.utc)

    # 4. Process each contact
    state_updated = False
    for contact in contacts:
        # Check if subscribed and opted in
        if contact.get("unsubscribed", False):
            continue
            
        email = contact.get("email")
        first_name = contact.get("first_name")
        if not first_name or first_name in ["-", "there", "Steve"]:
            try:
                from scripts.fix_contact_names import EXACT_NAME_MAP, extract_name_from_email
                if email in EXACT_NAME_MAP:
                    first_name = EXACT_NAME_MAP[email][0]
                else:
                    first_name, _ = extract_name_from_email(email)
            except Exception:
                first_name = "there"
        if not first_name or first_name == "-":
            first_name = "there"
            
        # Check subscription time and checkout cooldown
        created_str = contact.get("created_at")
        if not created_str:
            continue

        # Check 24-Hour Active Checkout Cooldown Protection
        if is_in_checkout_recovery_cooldown(email):
            print(f"🛑 Skipping nurture email for {email} (Active Checkout Recovery Cooldown: 24h protection enabled)")
            continue
            
        try:
            # Standardize timezone offset parsing
            created_dt = datetime.fromisoformat(created_str.replace("Z", "+00:00"))
        except Exception as e:
            print(f"⚠️ Error parsing created_at for {email}: {e}")
            continue

        # Calculate time elapsed
        time_elapsed = now_utc - created_dt
        days_elapsed = time_elapsed.total_seconds() / 86400.0

        # Initialize tracking for new subscribers
        if email not in nurture_state:
            nurture_state[email] = {
                "last_step_sent": -1,
                "last_sent_at": None,
                "subscribed_at": created_str
            }
            state_updated = True

        last_step = nurture_state[email]["last_step_sent"]

        # 5. Check if they qualify for the next step
        next_step = last_step + 1
        if next_step >= len(NURTURE_SEQUENCE):
            # Already completed sequence
            continue

        step_data = NURTURE_SEQUENCE[next_step]
        required_days = step_data["delay_days"]

        # Ensure required gap between emails is respected for existing subscribers
        last_sent_at_str = nurture_state[email].get("last_sent_at")
        if last_sent_at_str and last_step >= 0:
            try:
                last_sent_dt = datetime.fromisoformat(last_sent_at_str.replace("Z", "+00:00"))
                days_since_last = (now_utc - last_sent_dt).total_seconds() / 86400.0
                prev_step_days = NURTURE_SEQUENCE[last_step]["delay_days"]
                min_step_gap = required_days - prev_step_days
                if min_step_gap > 0 and days_since_last < min_step_gap:
                    continue
            except Exception:
                pass

        # Does the subscriber meet the day offset requirement?
        if days_elapsed >= required_days:
            formatted_subject = step_data["subject"]
            formatted_html = step_data["html"].format(artist_name=first_name, vip_link=STRIPE_VIP_MEMBERSHIP_LINK)
            
            print(f"\n📧 Contact {email} subscribed {days_elapsed:.2f} days ago (Requires: {required_days} days).")
            print(f"   🚀 Triggering Step {next_step}: '{formatted_subject}'")
            
            # Send the email!
            success = send_resend_email(email, formatted_subject, formatted_html)
            if success:
                # Update local progress state
                nurture_state[email]["last_step_sent"] = next_step
                nurture_state[email]["last_sent_at"] = datetime.now(timezone.utc).isoformat()
                state_updated = True
                
                # Sleep briefly to avoid any burst rate limits
                time.sleep(2)

    # Save state back if updated
    if state_updated:
        save_nurture_state(nurture_state)

    print("\n✨ Email nurture queue check complete.")
    print("======================================================================\n")

if __name__ == "__main__":
    run_nurture_campaign()

