import { ProjectData } from '../components/homepage/projects_section/types.ts';
import { useTranslation } from "react-i18next";

function GetProjectsData(){

    const [t, i18n] = useTranslation("projects");
    
    const ProjectsData: ProjectData[] = [
        {
          id: 1,
          tag: "sunshine-1",
          isAvailable: true,
          title: t("projects.projects.sunshine_1.title"),
          location: t("projects.projects.sunshine_1.location"),
          status: t("projects.on_sale"),
          statusColor: "rgba(33, 198, 0, 1)",
          description: t("projects.projects.sunshine_1.description"),
          imageUrl: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-32.jpg",
          priceText: t("projects.projects.sunshine_1.priceText"),
          placesNearby: [
            t("projects.projects.sunshine_1.placesNearby.beach"),
            t("projects.projects.sunshine_1.placesNearby.downtown"),
            t("projects.projects.sunshine_1.placesNearby.airport"),
            t("projects.projects.sunshine_1.placesNearby.island"),
          ],
          imageGallery: [
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-32.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-32.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-44.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-44.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-37.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-37.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-18.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-18.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-21.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-21.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-34.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-08-20_15-52-34.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-32.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-32.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-33.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-33.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-35.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-35.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-37.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-37.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-38.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-38.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-41.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-41.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-43.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-43.jpg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-24.jpg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/photo_2024-09-11_14-09-24.jpg",
            },
          ],
          paymentInformation: '',
          areas: {
            spaces: {
              floors: '2-3',
              bathrooms: '2-3',
              bedrooms: '2-3',
              parkingSpots: '2'
            },
            surfaces: {
              landArea: '100-160 m²',
              livingArea: '100-160 m²'
            }
          },
          amenities: {
            backyard: true,
            kitchen: true,
            pool: true,
            laundry: true
          },
          mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7558.775922134957!2d-68.45212950560057!3d18.69144120916463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8eb0065aef4e9%3A0x71bb09b8d2570bff!2sSUNSHINE%201!5e0!3m2!1sen!2sus!4v1726073837227!5m2!1sen!2sus',
          closeTo: {
            park: true,
            school: true,
            shops: true,
            gym: true,
            hospital: true,
            airport: true,
            banks: true,
            golf: true
          },
          contact: {
            profilePic: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4b8665c4016f61876c702616ebac55b067f060bcadf0f8a7d0b9595055de23bb?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294',
            name: 'Robin Hernandez',
            email: 'royaxsa04@gmail.com',
            phone: '1 (849) 260-8818'
          }
        },
        {
          id: 2,
          tag: "sunpalm-resident-i",
          isAvailable: true,
          title: t("projects.projects.sunpalm_resident_i.title"),
          location: t("projects.projects.sunpalm_resident_i.location"),
          status: t("projects.sold_out"),
          statusColor: "rgba(198, 0, 0, 1)",
          description: t("projects.projects.sunpalm_resident_i.description"),
          imageUrl: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/render-front_2.png",
          priceText: t("projects.projects.sunpalm_resident_i.priceText"),
          placesNearby: [
            t("projects.projects.sunpalm_resident_i.placesNearby.beach"),
            t("projects.projects.sunpalm_resident_i.placesNearby.downtown"),
            t("projects.projects.sunpalm_resident_i.placesNearby.airport"),
            t("projects.projects.sunpalm_resident_i.placesNearby.island"),
          ],
          imageGallery: [
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/render-front_2.png",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/render-front_2.png",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/interior-1.png",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/interior-1.png",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.16-PM-3.jpeg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.16-PM-3.jpeg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/vx1.png",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/vx1.png",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/vx3-1.png",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/vx3-1.png",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.16-PM-1.jpeg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.16-PM-1.jpeg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.16-PM-2-1.jpeg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.16-PM-2-1.jpeg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.15-PM.jpeg",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/WhatsApp-Image-2021-10-05-at-9.03.15-PM.jpeg",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/Dise-Arq1.png",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/Dise-Arq1.png",
            },
            {
                original: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/Dise-Arq2.png",
                thumbnail: "https://ashrob-media.s3.us-east-2.amazonaws.com/sunpalm-resident-i/Dise-Arq2.png",
            },
          ],
          paymentInformation: t("projects.projects.sunpalm_resident_i.paymentInformation"),
          areas: {
            spaces: {
              floors: '2',
              bathrooms: '2.5',
              bedrooms: '2-3',
              parkingSpots: '1'
            },
            surfaces: {
              landArea: '141 m²',
              livingArea: '100 m²'
            }
          },
          amenities: {
            backyard: true,
            kitchen: true,
            pool: true,
            laundry: true
          },
          mapLocation: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1611.5467704502348!2d-68.39370351301876!3d18.61267426738235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1726074910306!5m2!1sen!2sus',
          closeTo: {
            park: true,
            school: true,
            shops: true,
            gym: true,
            hospital: true,
            airport: true,
            banks: true,
            golf: true
          },
          contact: {
            profilePic: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4b8665c4016f61876c702616ebac55b067f060bcadf0f8a7d0b9595055de23bb?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294',
            name: 'Ayax Christopher',
            email: 'achristopher@sunpalmdr.com',
            phone: '1 (347) 792-2157'
          }
        },
        {
          id: 3,
          tag: "sunshine-2",
          title: t("projects.projects.sunshine_2.title"),
          location: t("projects.projects.sunshine_2.location"),
          status: t("projects.almost_gone"),
          statusColor: "rgba(234, 162, 5, 1)",
          description: t("projects.projects.sunshine_2.description"),
          imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
          imageGallery: [],
          priceText: '',
          placesNearby: [],
          paymentInformation: '',
          areas: {
            spaces: {
              floors: '',
              bathrooms: '',
              bedrooms: '',
              parkingSpots: ''
            },
            surfaces: {
              landArea: '',
              livingArea: ''
            }
          },
          amenities: {
            backyard: false,
            kitchen: false,
            pool: false,
            laundry: false
          },
          mapLocation: '',
          closeTo: {
            park: false,
            school: false,
            shops: false,
            gym: false,
            hospital: false,
            airport: false,
            banks: false,
            golf: false
          },
          contact: {
            profilePic: '',
            name: 'Robin Hernandez',
            email: 'royaxsa04@gmail.com',
            phone: '1 (849) 260-8818'
          },
          isAvailable: false
        }
    ];

    return ProjectsData;
}

export default GetProjectsData;