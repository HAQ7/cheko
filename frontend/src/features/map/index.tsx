import Title from "../../components/title";
import MapComponent from "./map-component";

export default function MapPage() {
  return (
    <section>
      <Title title="Map" count={12} />
      <MapComponent />
    </section>
  )
}
