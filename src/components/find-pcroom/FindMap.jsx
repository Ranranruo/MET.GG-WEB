import React, { useEffect } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
width: 100%;
height: 100%;
position: relative;
`
const Map = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`
const FindButton = styled.button`
    display: flex;
    gap: 5px;
    border-radius: 5px;
    align-items: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
    background-color: white;
    fill: #FD6505;
    height: 30px;
    &:hover > p{
        display: inline-block;
    }
    `
const Button = styled.button`
    display: flex;
    gap: 5px;
    border-radius: 5px;
    align-items: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
    background-color: white;
    fill: #FD6505;
    height: 30px;
    &:hover > p{
        display: inline-block;
    }
`
const Text = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    display: none;
    color: #FD6505;
`
const CurrentButton = styled(Button)`
    right: 10px;
    top: 130px;
`
const ZoomInButton = styled(Button)`
    right: 10px;
    top: 50px;
`
const ZoomOutButton = styled(Button)`
    right: 10px;
    top: 90px;
`
export default function FindMap() {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = false;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=4067f2e8121972f120190ddfaee15d12&libraries=services&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                const container = document.getElementById("map");
                let map;

                const ps = new kakao.maps.services.Places();

                let places = [];

                const moveToNearestPlace = () => {
                    if (places.length === 0) return;

                    places.sort((a, b) => {
                        return a.distance - b.distance;
                    });

                    const nearestPlace = places[0];
                    map.setCenter(new kakao.maps.LatLng(nearestPlace.y, nearestPlace.x));
                };

                const findPlaces = (position) => {
                    const latlng = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map = new kakao.maps.Map(container, { center: latlng, level: 3 });

                    ps.keywordSearch("피씨방", (data, status, pagination) => {
                        if (status === kakao.maps.services.Status.OK) {
                            places = data;
                            for (let i = 0; i < data.length; i++) {
                                displayMarker(data[i]);
                            }
                        }
                    }, { location: latlng });
                };

                const moveToCurrentLocation = () => {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((position) => {
                            const latlng = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            map.setCenter(latlng);
                        });
                    }
                };

                const zoomIn = () => {
                    map.setLevel(map.getLevel() - 1);
                };

                const zoomOut = () => {
                    map.setLevel(map.getLevel() + 1);
                };

                const displayMarker = (place) => {
                    const marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x),
                    });

                    const infowindow = new kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
                    });

                    kakao.maps.event.addListener(marker, 'mouseover', function () {
                        infowindow.open(map, marker);
                    });

                    kakao.maps.event.addListener(marker, 'mouseout', function () {
                        infowindow.close();
                    });
                };

                const button = document.getElementById("button");
                button.addEventListener("click", moveToNearestPlace);

                const currentLocationButton = document.getElementById("current-location-button");
                currentLocationButton.addEventListener("click", moveToCurrentLocation);

                const zoomInButton = document.getElementById("zoom-in-button");
                zoomInButton.addEventListener("click", zoomIn);

                const zoomOutButton = document.getElementById("zoom-out-button");
                zoomOutButton.addEventListener("click", zoomOut);

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(findPlaces);
                } else {
                    console.log("Geolocation is not supported by this browser.");
                }
            });
        };
    }, []);

    return (
        <Wrapper>
            <Map id="map"/>
            <FindButton id="button">
                <Text>가까운 PC방 찾기</Text>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </FindButton>
            <CurrentButton id="current-location-button">
                <Text>현재 위치로 이동</Text>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
            </CurrentButton>
            <ZoomInButton id="zoom-in-button">
                <Text>화면 확대</Text>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" /></svg>
            </ZoomInButton>
            <ZoomOutButton id="zoom-out-button">
                <Text>화면 축소</Text>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z" /></svg>
            </ZoomOutButton>
        </Wrapper>
    );
};
