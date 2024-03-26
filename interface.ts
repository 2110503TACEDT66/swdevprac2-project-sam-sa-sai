export interface HospitalItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  __v: number;
  id: string;
  price: number | 0;
  rating: number | 0;
}

export interface HospitalJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: HospitalItem[];
}

export interface HospitalDetail {
  success: boolean;
  data: HospitalItem;
}

export interface BookingItem {
  campgroundid: string;
  checkin: string;
  checkout: string;
}

/*-------------------------------------------------------*/

export interface CampgroundItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  region: string;
  postalcode: string;
  tel: string;
  url: string;
  maxReservations: number;
  coverpicture: string;
  picture: string[];
  description: string;
  price: number;
  rating: number;
  reservations: [];
  id: string;
}

export interface CampgroundJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: CampgroundItem[];
}
