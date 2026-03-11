import PlatformLayout from "@/components/platform/PlatformLayout";
import { insights } from "@/data/mockData";
import { Clock } from "lucide-react";

const InsightsPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Market Insights</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Intelligence, analysis, and trends across African markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((article) => (
              <article key={article.id} className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock size={10} /> {article.readTime}
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default InsightsPage;
