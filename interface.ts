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
  name: string;
  surname: string;
  id: string;
  hospital: string;
  bookDate: string;
}

/*-------------------------------------------------------*/

export interface CampgroundItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  rating: number | 0;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  __v: number;
  id: string;
  url: string;
  maxReservations: number;
  price: number | 0;
}

export interface CampgroundJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: CampgroundItem[];
}
