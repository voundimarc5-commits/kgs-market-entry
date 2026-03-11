import PlatformLayout from "@/components/platform/PlatformLayout";
import EventCard from "@/components/platform/EventCard";
import { events } from "@/data/mockData";

const EventsPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">African Business Events</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Conferences, summits and networking events across the African continent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default EventsPage;
