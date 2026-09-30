import { notFound } from "next/navigation";
import ServiceDetail from "./service-detail";
import { getServiceBySlug, services } from "../../../data/service-data";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Greno Plaza" };
  }

  return {
    title: `${service.title} | Greno Plaza`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
