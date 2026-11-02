export interface CountryDealInfo {
  name: string; flag: string; currency: string; gateways: string; pro: string; headline: string;
}

export const COUNTRY_DATA: Record<string, CountryDealInfo> = {
  us: { name: 'United States', flag: '🇺🇸', currency: 'USD ($)', gateways: 'Apple Pay, Google Pay, Cards', pro: 'ASCAP & BMI', headline: 'USA Beat Deals & VIP Subscription Pass' },
  ca: { name: 'Canada', flag: '🇨🇦', currency: 'CAD ($)', gateways: 'Apple Pay, Google Pay, Cards', pro: 'SOCAN', headline: 'Canada Beat Deals & VIP Subscription Pass' },
  gb: { name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP (£)', gateways: 'Apple Pay, Cards', pro: 'PRS for Music', headline: 'UK Beat Deals & VIP Subscription Pass' },
  ie: { name: 'Ireland', flag: '🇮🇪', currency: 'EUR (€)', gateways: 'Apple Pay, Cards', pro: 'IMRO', headline: 'Ireland Beat Deals & VIP Subscription Pass' },
  de: { name: 'Germany', flag: '🇩🇪', currency: 'EUR (€)', gateways: 'Sofort, Giropay, Cards', pro: 'GEMA', headline: 'Deutschland Beats Kaufen & VIP Pass Deals' },
  nl: { name: 'Netherlands', flag: '🇳🇱', currency: 'EUR (€)', gateways: 'iDEAL, Cards', pro: 'Buma/Stemra', headline: 'Nederland Beats Kopen & VIP Pass Deals' },
  fr: { name: 'France', flag: '🇫🇷', currency: 'EUR (€)', gateways: 'Carte Bancaire, Cards', pro: 'SACEM', headline: 'France Beats & VIP Pass Deals' },
  be: { name: 'Belgium', flag: '🇧🇪', currency: 'EUR (€)', gateways: 'Bancontact, Cards', pro: 'SABAM', headline: 'Belgium Beats & VIP Pass Deals' },
  ch: { name: 'Switzerland', flag: '🇨🇭', currency: 'CHF', gateways: 'Apple Pay, Cards', pro: 'SUISA', headline: 'Switzerland Beats & VIP Pass Deals' },
  se: { name: 'Sweden', flag: '🇸🇪', currency: 'SEK', gateways: 'Apple Pay, Cards', pro: 'STIM', headline: 'Sweden Beats & VIP Pass Deals' },
  dk: { name: 'Denmark', flag: '🇩🇰', currency: 'DKK', gateways: 'Apple Pay, Cards', pro: 'KODA', headline: 'Denmark Beats & VIP Pass Deals' },
  at: { name: 'Austria', flag: '🇦🇹', currency: 'EUR (€)', gateways: 'Sofort, Cards', pro: 'AKM', headline: 'Österreich Beats Kaufen & VIP Pass Deals' },
  it: { name: 'Italy', flag: '🇮🇹', currency: 'EUR (€)', gateways: 'Apple Pay, Cards', pro: 'SIAE', headline: 'Italia Basi Musicali & VIP Pass Deals' },
  es: { name: 'Spain', flag: '🇪🇸', currency: 'EUR (€)', gateways: 'Apple Pay, Cards', pro: 'SGAE', headline: 'España Base de Beats & VIP Pass Deals' },
  no: { name: 'Norway', flag: '🇳🇴', currency: 'NOK', gateways: 'Apple Pay, Cards', pro: 'TONO', headline: 'Norway Beats & VIP Pass Deals' },
  au: { name: 'Australia', flag: '🇦🇺', currency: 'AUD ($)', gateways: 'Apple Pay, Cards', pro: 'APRA AMCOS', headline: 'Australia Beat Deals & VIP Subscription Pass' },
  gh: { name: 'Ghana', flag: '🇬🇭', currency: 'GHS (₵)', gateways: 'Paystack MoMo & Cards', pro: 'GHAMRO', headline: 'Ghana Beat Deals & VIP Subscription Pass' },
  ng: { name: 'Nigeria', flag: '🇳🇬', currency: 'NGN (₦)', gateways: 'Paystack Transfer & Cards', pro: 'COSON', headline: 'Nigeria Beat Deals & VIP Subscription Pass' },
  za: { name: 'South Africa', flag: '🇿🇦', currency: 'ZAR (R)', gateways: 'Paystack EFT & Cards', pro: 'SAMRO', headline: 'South Africa Beat Deals & VIP Subscription Pass' },
};

// Aliases for full country names
COUNTRY_DATA['united-states'] = COUNTRY_DATA['us'];
COUNTRY_DATA['canada'] = COUNTRY_DATA['ca'];
COUNTRY_DATA['united-kingdom'] = COUNTRY_DATA['gb'];
COUNTRY_DATA['ireland'] = COUNTRY_DATA['ie'];
COUNTRY_DATA['germany'] = COUNTRY_DATA['de'];
COUNTRY_DATA['netherlands'] = COUNTRY_DATA['nl'];
COUNTRY_DATA['france'] = COUNTRY_DATA['fr'];
COUNTRY_DATA['belgium'] = COUNTRY_DATA['be'];
COUNTRY_DATA['switzerland'] = COUNTRY_DATA['ch'];
COUNTRY_DATA['sweden'] = COUNTRY_DATA['se'];
COUNTRY_DATA['denmark'] = COUNTRY_DATA['dk'];
COUNTRY_DATA['austria'] = COUNTRY_DATA['at'];
COUNTRY_DATA['italy'] = COUNTRY_DATA['it'];
COUNTRY_DATA['spain'] = COUNTRY_DATA['es'];
COUNTRY_DATA['norway'] = COUNTRY_DATA['no'];
COUNTRY_DATA['australia'] = COUNTRY_DATA['au'];
COUNTRY_DATA['ghana'] = COUNTRY_DATA['gh'];
COUNTRY_DATA['nigeria'] = COUNTRY_DATA['ng'];
// Music Capital City Deal Mapping
COUNTRY_DATA['los-angeles'] = { name: 'Los Angeles, USA', flag: '🇺🇸', currency: 'USD ($)', gateways: 'Apple Pay, Google Pay, Cards', pro: 'ASCAP & BMI', headline: 'Los Angeles Beat Deals & VIP Subscription Pass' };
COUNTRY_DATA['atlanta'] = { name: 'Atlanta, USA', flag: '🇺🇸', currency: 'USD ($)', gateways: 'Apple Pay, Google Pay, Cards', pro: 'ASCAP & BMI', headline: 'Atlanta Trap Beat Deals & VIP Subscription Pass' };
COUNTRY_DATA['london'] = { name: 'London, UK', flag: '🇬🇧', currency: 'GBP (£)', gateways: 'Apple Pay, Cards', pro: 'PRS for Music', headline: 'London Drill & Grime Deals & VIP Pass' };
COUNTRY_DATA['toronto'] = { name: 'Toronto, Canada', flag: '🇨🇦', currency: 'CAD ($)', gateways: 'Apple Pay, Cards', pro: 'SOCAN', headline: 'Toronto Dark R&B & Trap Beat Deals' };
COUNTRY_DATA['berlin'] = { name: 'Berlin, Germany', flag: '🇩🇪', currency: 'EUR (€)', gateways: 'Sofort, Giropay, Cards', pro: 'GEMA', headline: 'Berlin Hip-Hop Beats & VIP Pass Deals' };
COUNTRY_DATA['paris'] = { name: 'Paris, France', flag: '🇫🇷', currency: 'EUR (€)', gateways: 'Carte Bancaire, Cards', pro: 'SACEM', headline: 'Paris Afro-Trap Beats & VIP Pass Deals' };
COUNTRY_DATA['amsterdam'] = { name: 'Amsterdam, Netherlands', flag: '🇳🇱', currency: 'EUR (€)', gateways: 'iDEAL, Cards', pro: 'Buma/Stemra', headline: 'Amsterdam Beat Deals & VIP Subscription Pass' };
COUNTRY_DATA['lagos'] = { name: 'Lagos, Nigeria', flag: '🇳🇬', currency: 'NGN (₦)', gateways: 'Paystack Transfer & Cards', pro: 'COSON', headline: 'Lagos Afrobeats Deals & VIP Subscription Pass' };
COUNTRY_DATA['johannesburg'] = { name: 'Johannesburg, South Africa', flag: '🇿🇦', currency: 'ZAR (R)', gateways: 'Paystack EFT & Cards', pro: 'SAMRO', headline: 'Joburg Amapiano & Rap Deals & VIP Pass' };
COUNTRY_DATA['sydney'] = { name: 'Sydney, Australia', flag: '🇦🇺', currency: 'AUD ($)', gateways: 'Apple Pay, Cards', pro: 'APRA AMCOS', headline: 'Sydney Drill & Hip-Hop Beat Deals' };

