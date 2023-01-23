import { formatDistance, subDays } from "date-fns"

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
