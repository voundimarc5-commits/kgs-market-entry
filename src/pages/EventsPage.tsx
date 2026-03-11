import PlatformLayout from "@/components/platform/PlatformLayout";
import { events } from "@/data/mockData";
import { MapPin, Calendar, Users } from "lucide-react";

const EventsPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">African Business Events</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Conferences, summits and networking events across the African continent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((evt) => (
              <div key={evt.id} className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all">
                <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                  {evt.sector}
                </span>
                <h3 className="text-base font-semibold text-foreground mt-3 mb-3">{evt.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={13} /> {evt.city}, {evt.country}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={13} /> {new Date(evt.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={13} /> {evt.organizer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default EventsPage;
