import React, { useState, useEffect, useRef } from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import { LocationItemType } from '../../common/types'

let marker: { setMap?: (map: any) => void } = {}
let myLocation = {}
let distanceLine: { setMap?: (map: any) => void } = {}

export default function Map(props: { data: LocationItemType | null }) {
    const { data } = props
    const [myCurrentLocation, setMyCurrentLocation] = useState({ lat: 0, lng: 0 })
    const { ref, map, google } = useGoogleMaps(
        "AIzaSyCPJy3Czrqz6c2DNdk3um5JD260Lr_-4OY",
        {
            center: myCurrentLocation,
            zoom: 2,
        },
    );

    useEffect(() => {
        if (!map) {
            return;
        };
        myLocation = new google.maps.Marker({
            position: { lat: 0, lng: 0 },
            label: "A",
            map,
            title: "My Location"
        })
    }, [map, google]);

    useEffect(() => {
        if (data) {
            const { name, lat, lng } = data
            const itemLocation = { lat, lng }
            const locationLine = [myCurrentLocation, itemLocation]
            distanceLine.setMap && distanceLine.setMap(null)
            distanceLine = new google.maps.Polygon({
                paths: locationLine,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            });
            marker && marker.setMap && marker.setMap(null)
            marker = new google.maps.Marker({
                position: itemLocation,
                label: "B",
                map,
                title: name
            })
            distanceLine.setMap && distanceLine.setMap(map)
            map.setCenter(itemLocation)
            // map.setZoom(10)

        }
    }, [data, google, map])

    return (
        <div style={{ position: "sticky", top: 64 }}>
            <div ref={ref} style={{ width: "100%", height: "calc(100vh - 64px)" }} />
        </div>
    );
}
