import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SocialIcon } from "react-social-icons";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const mapCenter = {
  lat: 44.94038,
  lng: -63.53498,
};

const Contact = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center p-10">
      <div className="flex flex-col space-y-20 text-center justify-center md:text-left mb-10 md:mb-0">
        <h4 className="text-6xl cursive">
          <span className="decoration-[hotpink]/50">Get in Touch</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[hotpink] h-7 w-7" />
            <a href="tel:+19022667006" className="text-2xl">
              (902) 266-7006
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[hotpink] h-7 w-7" />
            <p className="text-2xl">
              219 Highway 2, Unit #4, Enfield, NS, Canada, Nova Scotia
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[hotpink] h-7 w-7" />
            <p className="text-2xl">soaringcranesushi@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <SocialIcon url="https://www.facebook.com/soaringcranesushi" />
            <SocialIcon url="https://www.instagram.com/soaringcranesushi" />
          </div>
        </div>
      </div>
      <div className="mapContainer w-full md:w-1/2 h-64 md:h-96">
        <MapContainer
          center={mapCenter}
          zoom={25}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter}>
            <Popup open>
              219 Highway 2, Unit #4, Enfield, NS, Canada, Nova Scotia
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
