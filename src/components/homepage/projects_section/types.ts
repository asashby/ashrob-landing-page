export interface ProjectData {
    id: number;
    tag: string;
    title: string;
    location: string;
    status: string;
    statusColor: string;
    description: string;
    imageUrl: string;
    imageGallery: ImageData[];
    priceText: string,
    placesNearby: string[];
    paymentInformation: string;
    areas: {
      spaces: {
        floors: string;
        bathrooms: string;
        bedrooms: string;
        parkingSpots: string;
      },
      surfaces: {
        landArea: string;
        livingArea: string;
      }
    };
    amenities: {
      backyard: boolean,
      kitchen: boolean,
      pool: boolean,
      laundry: boolean,
    };
    mapLocation: string;
    closeTo: {
      park: boolean,
      school: boolean,
      shops: boolean,
      gym: boolean,
      hospital: boolean,
      airport: boolean,
      banks: boolean,
      golf: boolean,
    };
    contacts: contactData[];
    isAvailable: boolean;
  }

  export interface ImageData {
    url: string,
    caption: string,
  }

  export interface contactData {
    profilePic: string;
    name: string;
    email: string;
    phone: string;
  }