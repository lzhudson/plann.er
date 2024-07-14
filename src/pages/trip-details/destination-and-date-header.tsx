import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { UpdateTripDestinationAndDateModal } from "./update-trip-destination-and-date-modal";

export interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>();
  const [isUpdateTripDestinationAndDatesModalOpen, setIsUpdateTripDestinationAndDatesModalOpen] = useState(false);
  
  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])
  console.log(trip);
  const displayedDate = trip
    ? format(trip?.starts_at, "d 'de 'LLL").concat(' até ').concat(format(trip?.ends_at, "d 'de 'LLL"))
    : null;

  function openUpdateTripDestinationAndDatesModal() {
    setIsUpdateTripDestinationAndDatesModalOpen(true);
  }

  function closeUpdateTripDestinationAndDatesModal() {
    setIsUpdateTripDestinationAndDatesModalOpen(false);
  }

  return (
    <>
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shap flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{trip?.destination}</span>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <span className="text-zinc-100">{displayedDate}</span>
            </div>
            <div className="w-px h-6 bg-zinc-800"></div>
            <Button onClick={openUpdateTripDestinationAndDatesModal} variant="secondary">
              Alterar local/data <Settings2 className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      {isUpdateTripDestinationAndDatesModalOpen && trip?.destination && trip.starts_at && trip.ends_at && (
        <UpdateTripDestinationAndDateModal
          closeUpdateTripDestinationAndDateModal={closeUpdateTripDestinationAndDatesModal}
          destination={trip?.destination}
          eventStartAndEndDates={{
            from: new Date(trip.starts_at),
            to: new Date(trip.ends_at)
          }}
        />
      )}
    </>
  )
}