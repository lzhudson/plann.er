import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { AddImportantLinkModal } from "./add-important-link-modal";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Link {
  id: string
  title: string
  trip_id: string
  url: string
}

export function ImportantLinks() {
  const [showAddImportantLinkModal, setShowAddImportantLinkModal] = useState(false);
  const [importantLinks, setImportantLinks] = useState<Link[]>([]);
  const { tripId } = useParams();

  function openShowAddImportantLinkModal() {
    setShowAddImportantLinkModal(true)
  }

  function closeShowAddImportantLinkModal() {
    setShowAddImportantLinkModal(false)
  }


  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => {
      setImportantLinks(response.data.links);
    })
  }, [tripId])

  return (
    <>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Link importantes</h2>
        <div className="space-y-5">
          {importantLinks.map(link => {
            return (
              <div key={link.id} className="flex items-center justify-between">
                <div className="space-y-5">
                  <span className="block font-medium  text-zinc-100">{link.title}</span>
                  <a target="_blank" href={link.url} className="block text-xs truncate text-zinc-400 hover:text-zinc-200">
                    {link.url}
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
            )
          })}
        </div>
        <Button onClick={openShowAddImportantLinkModal} variant="secondary" >
          <Plus className="size-5" />
          Cadastrar novo link
        </Button>
      </div>
      {showAddImportantLinkModal && (
        <AddImportantLinkModal closeAddImportantLinkModal={closeShowAddImportantLinkModal} />
      )}
    </>
  )
}