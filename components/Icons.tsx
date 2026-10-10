import type { ServiceIcon } from "@/lib/site";

const paths: Record<ServiceIcon, React.ReactNode> = {
  house: (<><path d="M4 22 24 6l20 16" /><path d="M10 20v20h28V20" /><path d="M20 40V28h8v12" /></>),
  building: (<><path d="M10 42V8h20v34" /><path d="M30 42V20h10v22" /><path d="M16 14h8M16 22h8M16 30h8M34 26h2M34 34h2M6 42h38" /></>),
  spray: (<><path d="M16 20h12v22H16z" /><path d="M18 20v-6h8v6" /><path d="M26 14h10" /><path d="M38 8v2M42 12h-2M38 16v-2" /></>),
  sofa: (<><path d="M8 22a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v6H8z" /><path d="M4 28h40v8H4z" /><path d="M10 36v4M38 36v4" /></>),
  desk: (<><path d="M6 20h36v6H6z" /><path d="M10 26v14M38 26v14" /><path d="M16 20v-8h16v8" /></>),
  box: (<><path d="M6 16 24 8l18 8v18L24 42 6 34z" /><path d="M6 16l18 8 18-8M24 24v18" /></>),
};

export default function Icon({ name }: { name: ServiceIcon }) {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
