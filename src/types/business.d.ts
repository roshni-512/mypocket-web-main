type BusinessRes = {
  data: BusinessResData;
};

type BusinessResData = {
  _id: string;
  skinId: string;
  businessName: string;
  ownerName: string;
  designation: string;
  ownerNumber: string;
  alternateNumber: string;
  telephone: string;
  whatsapp: string;
  email: string;
  fax: string;
  address: string;
  profession: string;
  industry: string;
  about: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  businessLogo: string;
  contactUs: BusinessResContactUs[];
};

type BusinessResContactUs = {
  _id: string;
  business: string;
  type: string;
  url: string;
  cardType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
