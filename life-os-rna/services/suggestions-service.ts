
export type Suggestion = {
  id: string
  domain: "Wealth" | "Health" | "Love" | "Evolution"
  kind: "article" | "video" | "idea" | "exercise"
  title: string
  url?: string
  note?: string
}

export class SuggestionsService {
  constructor(private env: Record<string, unknown>) {}

  async generateFromLogs(opts: { days: number }): Promise<Suggestion[]> {
    return [
      { id: "w1", domain: "Wealth", kind: "video",  title: "Cloud Scale Patterns — 2025" },
      { id: "h1", domain: "Health", kind: "exercise", title: "5‑min mobility for devs" },
      { id: "l1", domain: "Love", kind: "idea", title: "Father–Son Lab: voice bot demo" }
    ]
  }
}
