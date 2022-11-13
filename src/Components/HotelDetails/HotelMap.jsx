import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const HotelMap = ({ hotelData }) => {

    const { longitude, latitude } = hotelData.location
    const position = [longitude, latitude]
    // const position = [51.505, -0.09]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default HotelMap
