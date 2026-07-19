export type Branch = {
  key: "yildirim" | "kocatepe" | "eyup";
  name: string;
  district: string;
  address: string;
  phone: string;
  phoneHref: string;
  instagram: string;
  instagramHandle: string;
  mapQuery: string;
};

export const branches: Branch[] = [
  {
    key: "yildirim",
    name: "Yıldırım Şubesi",
    district: "Bayrampaşa",
    address: "Yıldırım Mahallesi, Şehir Parkı Caddesi, No:17 Bayrampaşa/İstanbul",
    phone: "+90 (505) 493 14 82",
    phoneHref: "tel:+905054931482",
    instagram: "https://instagram.com/bihteranaokullari",
    instagramHandle: "@bihteranaokullari",
    mapQuery: "Yıldırım Mahallesi Şehir Parkı Caddesi 17 Bayrampaşa İstanbul",
  },
  {
    key: "kocatepe",
    name: "Kocatepe Şubesi",
    district: "Bayrampaşa",
    address: "Kocatepe Mahallesi, 32. Sokak, No:16/A Bayrampaşa/İstanbul",
    phone: "+90 (545) 737 76 38",
    phoneHref: "tel:+905457377638",
    instagram: "https://instagram.com/bihteranaokullariikocatepe",
    instagramHandle: "@bihteranaokullariikocatepe",
    mapQuery: "Kocatepe Mahallesi 32. Sokak 16 Bayrampaşa İstanbul",
  },
  {
    key: "eyup",
    name: "Eyüp Şubesi",
    district: "Eyüpsultan",
    address: "Karadolap Mahallesi, Neşeli Sokak, No:9/A Eyüpsultan/İstanbul",
    phone: "+90 (538) 661 68 06",
    phoneHref: "tel:+905386616806",
    instagram: "https://instagram.com/bihteranaokullarieyup",
    instagramHandle: "@bihteranaokullarieyup",
    mapQuery: "Karadolap Mahallesi Neşeli Sokak 9 Eyüpsultan İstanbul",
  },
];

export const CONTACT_EMAIL = "bihteranaokullari@hotmail.com";
