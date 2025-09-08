import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DocumentPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: ExclamationTriangleIcon,
    title: "Crimes Reported Today",
    value: "312",
    footer: {
      color: "text-red-500",
      value: "+12%",
      label: "Compared to yesterday",
    },
  },
  {
    color: "gray",
    icon: CheckCircleIcon,
    title: "Cases Resolved",
    value: "198",
    footer: {
      color: "text-green-500",
      value: "+7%",
      label: "Resolution rate improved",
    },
  },
  {
    color: "gray",
    icon: DocumentPlusIcon,
    title: "New FIRs Filed",
    value: "84",
    footer: {
      color: "text-red-500",
      value: "-4%",
      label: "Compared to last week",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Crime Rate Trend",
    value: "⬆ Rising",
    footer: {
      color: "text-red-500",
      value: "+5%",
      label: "In high-risk zones",
    },
  },
];

export default statisticsCardsData;
