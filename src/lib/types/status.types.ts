export type Status = "ALLNORMAL" | "SOMEDOWN" | "ALLDOWN"

export const statusConfig: Record<Status, { color: string; label: string }> = {
    ALLNORMAL: { color: "text-blue-300",   label: "All systems normal." },
    SOMEDOWN:  { color: "text-yellow-300", label: "Some systems down."  },
    ALLDOWN:   { color: "text-red-300",    label: "All systems down."   },
}
