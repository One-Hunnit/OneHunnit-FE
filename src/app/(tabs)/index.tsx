import { NaverMapMarkerOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import { StyleSheet, View } from 'react-native';
import useLocationTracking from '@/hooks/useLocationTracking';

export default function Home() {
  const locationCoords = useLocationTracking();

  return (
    <View style={styles.container}>
      <NaverMapView
        initialRegion={{
          latitude: locationCoords.latitude,
          longitude: locationCoords.longitude,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0022,
        }}
        isShowScaleBar={false}
        isShowZoomControls={false}
        style={styles.mapContainer}
      >
        <NaverMapMarkerOverlay
          latitude={locationCoords.latitude}
          longitude={locationCoords.longitude}
          anchor={{ x: 0.5, y: 1 }}
          width={40}
          height={40}
          image={require('@/assets/images/png/currentLocationIcon.png')}
        ></NaverMapMarkerOverlay>
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
});
