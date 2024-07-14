import { Calendar, Pin, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent, useState } from "react"
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";

interface UpdateTripDestinationAndDateModalProps {
  destination: string
  eventStartAndEndDates: DateRange | undefined
  closeUpdateTripDestinationAndDateModal: () => void
}

export function UpdateTripDestinationAndDateModal({
  closeUpdateTripDestinationAndDateModal,
  destination,
  eventStartAndEndDates
}: UpdateTripDestinationAndDateModalProps) {
  const { tripId } = useParams();
  const [newDestination, setNewDestination] = useState(destination);

  const [newEventStartAndEndDates, setNewEventStartAndEndDates] = useState<DateRange | undefined>(eventStartAndEndDates);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }


  const displayedDate =
    newEventStartAndEndDates && newEventStartAndEndDates.from && newEventStartAndEndDates.to
      ? format(newEventStartAndEndDates.from, "d 'de 'LLL").concat(' até ').concat(format(newEventStartAndEndDates.to, "d 'de 'LLL"))
      : null;

  async function updateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(newDestination, newEventStartAndEndDates);
    await api.put(`/trips/${tripId}`, {
      destination: newDestination,
      starts_at: newEventStartAndEndDates?.from,
      ends_at: newEventStartAndEndDates?.to
    })
    window.document.location.reload()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Atualizar viagem</h2>
            <button type="button" onClick={closeUpdateTripDestinationAndDateModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-left text-sm text-zinc-400">
            Preencha os campos abaixo para atualizar sua viagem
          </p>
        </div>

        <form onSubmit={updateTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Pin className="text-zinc-400 size-5" />
            <input
              name="destination"
              onChange={(event) => setNewDestination(event.target.value)}
              value={newDestination}
              placeholder="Digite o novo local da viagem"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <button
              type="button"
              onClick={openDatePicker}
              className="flex items-center gap-2 text-left outline-none w-[240px]"
            >
              <Calendar className="size-5 text-zinc-400" />
              <span
                className="bg-transparent text-lg text-zinc-400 w-40 flex-1">{displayedDate || 'Quando?'}</span>
            </button>
          </div>

          {isDatePickerOpen && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
              <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Selecione a data</h2>
                    <button type="button" onClick={closeDatePicker}>
                      <X className="size-5 text-zinc-400" />
                    </button>
                  </div>
                </div>

                <DayPicker mode="range" selected={newEventStartAndEndDates} onSelect={setNewEventStartAndEndDates} />
              </div>
            </div>
          )}
          <Button size="full">
            Atualizar viagem
          </Button>
        </form>
      </div>
    </div>
  )
}