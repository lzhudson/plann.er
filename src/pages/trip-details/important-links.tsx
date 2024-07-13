import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Link importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <span className="block font-medium  text-zinc-100">Reserva do AirBnB</span>
            <span className="block text-xs truncate text-zinc-400 hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/611568560615551716?search_mode=regular_search&check_in=2024-07-20&check_out=2024-07-27&source_impression_id=p3_1720887167_P3VUgqslrZQXq3Wo&previous_page_section_name=1000&federated_search_id=bd80a8b8-3d37-451b-a403-d0401cf3932e            </span>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <span className="block font-medium  text-zinc-100">Reserva do AirBnB</span>
            <span className="block text-xs truncate text-zinc-400 hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/611568560615551716?search_mode=regular_search&check_in=2024-07-20&check_out=2024-07-27&source_impression_id=p3_1720887167_P3VUgqslrZQXq3Wo&previous_page_section_name=1000&federated_search_id=bd80a8b8-3d37-451b-a403-d0401cf3932e            </span>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button variant="secondary" >
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}