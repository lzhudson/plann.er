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
              https//asmasmslkmaslkmaslamslsamlkmlasmlamlksamlkmslkamslkm
            </span>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <span className="block font-medium  text-zinc-100">Reserva do AirBnB</span>
            <span className="block text-xs truncate text-zinc-400 hover:text-zinc-200">
              https//asmasmslkmaslkmaslamslsamlkmlasmlamlksamlkmslkamslkm
            </span>
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